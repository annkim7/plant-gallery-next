import { ObjectId } from 'mongodb'

export type ListData = {
  _id: ObjectId
  title: string
  content: string
  img: string
  author: string | undefined | null
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

export const addItem = async (form: { title: string; content: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/post/new`,
    {
      method: 'POST',
      body: JSON.stringify(form),
    },
  )
  const data = await res.json()
  return data
}

export const editItem = async (form: ListData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/post/edit`,
    {
      method: 'POST',
      body: JSON.stringify(form),
    },
  )
  const data = await res.json()
  return data
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
