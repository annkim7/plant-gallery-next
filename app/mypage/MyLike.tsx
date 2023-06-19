'use client'

import { useGetMyLike } from '@/hook/mypage'
import { Session } from 'next-auth'
import Link from 'next/link'

interface ListProps {
  info: Session | null
}

export default function MyLike({ info }: ListProps) {
  const { data } = useGetMyLike(info?.user?.email)

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
