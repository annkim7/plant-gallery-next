import { connectDB } from '@/util/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = (await connectDB).db('plant')
  let result = await db.collection('post').find().toArray()

  res.status(200).json(result)
}
