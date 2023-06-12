import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let session = await getServerSession(req, res, authOptions)

  req.body = JSON.parse(req.body)

  if (req.method === 'POST') {
    let saveOne = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session?.user?.email,
      name: session?.user?.name,
    }

    const db = (await connectDB).db('plant')
    let result = await db.collection('comment').insertOne(saveOne)

    return res.status(200).json('저장 완료')
  }
}
