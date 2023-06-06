'use client'

import {  useGetItem } from '@/hook/post'

interface ItemProps {
  id: string
}

export default function Item({ id }: ItemProps) {
  const { data } = useGetItem(id)

  return (
    <div>
      <strong>item</strong>
      <span>{data?.title}</span>
      <p>{data?.content}</p>
    </div>
  )
}
