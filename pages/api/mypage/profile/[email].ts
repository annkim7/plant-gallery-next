import { connectDB } from '@/util/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = (await connectDB).db('plant')
  let result = await db
    .collection('user_cred')
    .findOne({ email: req.query.email })

  return res.status(200).json(result)
}
