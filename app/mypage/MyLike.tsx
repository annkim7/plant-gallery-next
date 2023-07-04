'use client'

import { useSession } from 'next-auth/react'
import { useGetMyLike } from '@/hook/mypage'
import Label from '@/components/Label'
import Board from '@/components/Board'
import Loading from '../loading'

export default function MyLike() {
  const { data: session } = useSession()
  const { data, isLoading } = useGetMyLike(session?.user?.email)

  return (
    <div>
      <Label label="좋아요한 글 리스트" />
      {isLoading && <Loading />}
      {data?.map((el) => (
        <Board
          key={`${el._id}`}
          src={`/detail/${el.parent}`}
          title={el.title}
        />
      ))}
    </div>
  )
}
