import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('plant')
    let result = await db
      .collection('post')
      .updateOne(
        { _id: new ObjectId(req.body._id) },
        { $set: { title: req.body.title, content: req.body.content } },
      )
    return res.redirect(302, '/list')
  }
}
