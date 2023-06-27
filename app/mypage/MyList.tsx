'use client'

import { useSession } from 'next-auth/react'
import { useGetMyPost } from '@/hook/mypage'
import Label from '@/components/Label'
import Board from '@/components/Board'

export default function List() {
  const { data: session } = useSession()
  const { data } = useGetMyPost(session?.user?.email)

  return (
    <div>
      <Label label="작성한 글 리스트" />
      {data?.map((el) => (
        <Board key={`${el._id}`} src={`/detail/${el._id}`} title={el.title} />
      ))}
    </div>
  )
}
