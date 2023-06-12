import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function listHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = (await connectDB).db('plant')
  let result = await db
    .collection('comment')
    .find({ parent: new ObjectId(`${req.query.id}`) })
    .toArray()

  res.status(200).json(result)
}
