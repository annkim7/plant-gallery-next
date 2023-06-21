'use client'

import { useGetMyLike } from '@/hook/mypage'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function MyLike() {
  const { data: session } = useSession()
  const { data } = useGetMyLike(session?.user?.email)

  return (
    <div>
      <h3>좋아요한 글 리스트</h3>
      {data?.map((el) => (
        <div key={`${el._id}`}>
          <Link href={`/detail/${el._id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  )
}
