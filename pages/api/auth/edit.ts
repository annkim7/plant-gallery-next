import { connectDB } from '@/util/database'
import bcrypt from 'bcryptjs'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let { name, email, password, image } = JSON.parse(req.body)
    const hash = await bcrypt.hash(password, 10)
    password = hash

    let db = (await connectDB).db('plant')
    const foundData = await db.collection('user_cred').findOne({ email })

    const result = await db.collection('user_cred').updateOne(
      { _id: new ObjectId(foundData?._id) },
      {
        $set: {
          name,
          password: password ? password : foundData?.password,
          image,
        },
      },
    )

    res.status(200).json(result)
  }
}
