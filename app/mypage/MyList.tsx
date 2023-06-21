'use client'

import { useGetMyPost } from '@/hook/mypage'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function List() {
  const { data: session } = useSession()
  const { data } = useGetMyPost(session?.user?.email)

  return (
    <div>
      <h3>작성한 글 리스트</h3>
      {data?.map((el) => (
        <div key={`${el._id}`}>
          <Link href={`/detail/${el._id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  )
}
