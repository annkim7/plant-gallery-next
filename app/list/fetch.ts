import { ObjectId } from 'mongodb'

type ListData = {
  _id: ObjectId
  title: string
  content: string
}

export const getList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/post/list`,
  )
  const data = await res.json()
  return data as ListData[]
}
