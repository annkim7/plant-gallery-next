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

  if (!session) {
    return res.status(500).json('로그인해주세요')
  }

  if (req.method === 'POST') {
    const db = (await connectDB).db('plant')
    let foundData = await db
      .collection('like')
      .findOne({ parent: new ObjectId(req.body._id) })

    if (foundData) {
      const base = foundData?.author.filter(
        (el: string | null | undefined) => el === session?.user?.email,
      )

      if (base.length) {
        let result = await db.collection('like').updateOne(
          { _id: new ObjectId(foundData?._id) },
          {
            $set: {
              author: foundData?.author.filter(
                (el: string | null | undefined) => el !== session?.user?.email,
              ),
            },
          },
        )
        return res.status(200).json('저장 완료')
      } else {
        let result = await db
          .collection('like')
          .updateOne(
            { _id: new ObjectId(foundData._id) },
            { $set: { author: [...foundData.author, session?.user?.email] } },
          )
        return res.status(200).json('저장 완료')
      }
    } else {
      let data = {
        parent: new ObjectId(req.body._id),
        author: [session?.user?.email],
      }

      let result = await db.collection('like').insertOne(data)
      return res.status(200).json('저장 완료')
    }
  }
}
