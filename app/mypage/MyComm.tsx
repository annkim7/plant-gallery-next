'use client'

import { useSession } from 'next-auth/react'
import { useGetMyComm } from '@/hook/mypage'
import Label from '@/components/Label'
import Board from '@/components/Board'
import Loading from '../loading'

export default function MyComm() {
  const { data: session } = useSession()
  const { data, isLoading } = useGetMyComm(session?.user?.email)

  return (
    <div>
      <Label label="작성한 댓글 리스트" />
      {isLoading && <Loading />}
      {data?.map((el) => (
        <Board
          key={`${el._id}`}
          src={`/detail/${el.parent}`}
          title={el.content}
        />
      ))}
    </div>
  )
}
