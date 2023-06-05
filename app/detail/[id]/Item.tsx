'use client'

import { useQuery } from '@tanstack/react-query'
import { getItem } from '@/hook/post'

interface ItemProps {
  id: string
}

export default function Item({ id }: ItemProps) {
  const { data } = useQuery(['item', id], () => getItem(id), {
    staleTime: 10 * 1000,
  })

  return (
    <div>
      <strong>item</strong>
      <span>{data?.title}</span>
      <p>{data?.content}</p>
    </div>
  )
}
