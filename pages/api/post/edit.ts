import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('plant')
    const { _id, title, content } = JSON.parse(req.body)
    let result = await db
      .collection('post')
      .updateOne(
        { _id: new ObjectId(_id) },
        { $set: { title: title, content: content } },
      )
    // return res.redirect(302, '/list')
    return res.status(200).json('수정완료')
  }
}
