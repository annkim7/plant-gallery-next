import { ObjectId } from 'mongodb'

type ListData = {
  _id: ObjectId
  title: string
  content: string
}

export const getList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/posts/list`,
  )
  const data = await res.json()
  return data as ListData[]
}

export const getItem = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/posts/${id}`,
  )
  const data = await res.json()
  return data as ListData
}

export const deleteItem = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/post/delete`,
    {
      method: 'POST',
      body: `${id}`,
    },
  )
  const data = await res.json()
  return data
}
