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
      .deleteOne({ _id: new ObjectId(req.body) })

    return res.status(200).json('삭제완료')
  }
}
