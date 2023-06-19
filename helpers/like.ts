import { ObjectId } from 'mongodb'

export type LikeData = {
  _id: ObjectId
  parent: ObjectId
  title: string
  author: string[]
}

export const getLike = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/like/list?id=${id}`,
  )
  const data = await res.json()
  return data as LikeData[]
}

export const editLike = async (form: { _id: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/like/edit`,
    {
      method: 'POST',
      body: JSON.stringify(form),
    },
  )
  const data = await res.json()
  return data
}
