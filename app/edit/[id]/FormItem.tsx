'use client'

import { useQuery } from '@tanstack/react-query'
import { getItem } from '@/hook/post'

interface ItemProps {
  id: string
}

export default function FormItem({ id }: ItemProps) {
  const { data } = useQuery(['item', id], () => getItem(id), {
    staleTime: 10 * 1000,
  })

  return (
    <form action="/api/post/edit" method="POST">
      <input name="title" defaultValue={data?.title} />
      <input name="content" defaultValue={data?.content} />
      <input
        style={{ display: 'none' }}
        name="_id"
        defaultValue={data?._id.toString()}
      />
      <button type="submit">전송</button>
    </form>
  )
}
