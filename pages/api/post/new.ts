import { connectDB } from '@/util/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    if (req.body.title === '') {
      return res.status(500).json('제목 써주세요!')
    }

    try {
      const db = (await connectDB).db('plant')
      let result = await db.collection('post').insertOne(req.body)
      return res.redirect(302, '/list')
    } catch (err) {
      return res.status(401).json('wrong request')
    }
  }
}
