import { connectDB } from '@/util/database'
import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let { name, email, password } = JSON.parse(req.body)
    const hash = await bcrypt.hash(password, 10)
    password = hash

    let db = (await connectDB).db('plant')
    await db.collection('user_cred').insertOne({ name, email, password })

    res.status(200).json('회원가입 완료')
  }
}
