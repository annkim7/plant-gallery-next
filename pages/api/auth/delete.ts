import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('plant')
    let foundData = await db
      .collection('user_cred')
      .findOne({ email: req.body })

    let result = await db
      .collection('user_cred')
      .deleteOne({ _id: new ObjectId(foundData?._id) })

    return res.status(200).json('삭제완료')
  }
}
