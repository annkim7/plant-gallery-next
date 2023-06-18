import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('plant')
    const { _id, content, parent, author, name } = JSON.parse(req.body)
    let result = await db
      .collection('comment')
      .updateOne(
        { _id: new ObjectId(_id) },
        { $set: { content, parent: new ObjectId(parent), author, name } },
      )

    return res.status(200).json('수정완료')
  }
}
