import { connectDB } from '@/util/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = (await connectDB).db('plant')
  let result = await db
    .collection('comment')
    .find({ author: req.query.author })
    .toArray()

  return res.status(200).json(result)
}
