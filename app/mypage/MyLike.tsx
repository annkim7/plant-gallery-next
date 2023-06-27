'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useGetMyLike } from '@/hook/mypage'
import Label from '@/components/Label'

export default function MyLike() {
  const { data: session } = useSession()
  const { data } = useGetMyLike(session?.user?.email)

  return (
    <div>
      <Label label="좋아요한 글 리스트" />
      {data?.map((el) => (
        <div key={`${el._id}`}>
          <Link href={`/detail/${el._id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  )
}
