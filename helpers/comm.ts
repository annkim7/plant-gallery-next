import { ObjectId } from 'mongodb'

type CommentData = {
  _id: ObjectId
  content: string
  parent: string
  author: string
  name: string
}

export const getComment = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/comment/list?id=${id}`,
  )
  const data = await res.json()
  return data as CommentData[]
}

export const addComment = async (form: { _id: string; comment: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/comment/new`,
    {
      method: 'POST',
      body: JSON.stringify(form),
    },
  )
  const data = await res.json()
  return data
}
