import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let session = await getServerSession(req, res, authOptions)

    const db = (await connectDB).db('plant')
    let findData = await db
      .collection('post')
      .findOne({ _id: new ObjectId(req.body) })

    if (findData?.author === session?.user?.email) {
      let result = await db
        .collection('post')
        .deleteOne({ _id: new ObjectId(req.body) })
      let comment = await db
        .collection('comment')
        .deleteMany({ parent: new ObjectId(req.body) })
      let like = await db
        .collection('like')
        .deleteMany({ parent: new ObjectId(req.body) })

      return res.status(200).json('삭제완료')
    } else {
      return res.status(500).json('해당 유저가 작성한 게시글이 아닙니다')
    }
  }
}
