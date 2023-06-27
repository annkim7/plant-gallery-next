'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useGetMyPost } from '@/hook/mypage'
import Label from '@/components/Label'

export default function List() {
  const { data: session } = useSession()
  const { data } = useGetMyPost(session?.user?.email)

  return (
    <div>
      <Label label="작성한 글 리스트" />
      {data?.map((el) => (
        <div key={`${el._id}`}>
          <Link href={`/detail/${el._id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  )
}
