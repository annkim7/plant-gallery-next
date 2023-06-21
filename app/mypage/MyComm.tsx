'use client'

import { useGetMyComm } from '@/hook/mypage'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function MyComm() {
  const { data: session } = useSession()
  const { data } = useGetMyComm(session?.user?.email)

  return (
    <div>
      <h3>작성한 댓글 리스트</h3>
      {data?.map((el) => (
        <div key={`${el._id}`}>
          <Link href={`/detail/${el.parent}`}>{el.content}</Link>
        </div>
      ))}
    </div>
  )
}
