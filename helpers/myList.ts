import { CommentData } from './comm'
import { ListData } from './fetch'
import { LikeData } from '@/helpers/like'

export const getMemberPost = async (author: string | undefined | null) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/mypage/post/${author}`,
  )
  const data = await res.json()
  return data as ListData[]
}

export const getMemberComm = async (author: string | undefined | null) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/mypage/comment/${author}`,
  )
  const data = await res.json()
  return data as CommentData[]
}

export const getMemberLike = async (author: string | undefined | null) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/mypage/like/${author}`,
  )
  const data = await res.json()
  return data as LikeData[]
}
