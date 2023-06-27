'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useGetMyComm } from '@/hook/mypage'
import Label from '@/components/Label'

export default function MyComm() {
  const { data: session } = useSession()
  const { data } = useGetMyComm(session?.user?.email)

  return (
    <div>
      <Label label="작성한 댓글 리스트" />
      {data?.map((el) => (
        <div key={`${el._id}`}>
          <Link href={`/detail/${el.parent}`}>{el.content}</Link>
        </div>
      ))}
    </div>
  )
}
