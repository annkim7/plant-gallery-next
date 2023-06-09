'use client'

import { useGetItem } from '@/hook/post'

interface ItemProps {
  id: string
}

export default function Item({ id }: ItemProps) {
  const { data } = useGetItem(id)

  return (
    <div className="px-3 py-3 border border-zinc-200 rounded">
      <strong>item</strong>
      <span>{data?.title}</span>
      <p>{data?.content}</p>
    </div>
  )
}
