'use client'

import { useGetMyComm } from '@/hook/mypage'
import { Session } from 'next-auth'
import Link from 'next/link'

interface CommProps {
  info: Session | null
}

export default function MyComm({ info }: CommProps) {
  const { data } = useGetMyComm(info?.user?.email)

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
