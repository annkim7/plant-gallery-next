import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = (await connectDB).db('plant')
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(req.query.id?.toString()) })

  return res.status(200).json(result)
}
