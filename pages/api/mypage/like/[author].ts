import { connectDB } from '@/util/database'
import { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from 'mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = (await connectDB).db('plant')
  let result = await db
    .collection('like')
    .find({ author: req.query.author })
    .toArray()

  let newResult = await Promise.all(
    result.map(async (el) => {
      let foundData = await db
        .collection('post')
        .findOne({ _id: new ObjectId(el.parent?.toString()) })

      return { ...el, title: foundData?.title }
    }),
  )

  return res.status(200).json(newResult)
}
