'use client'

import Link from 'next/link'
import { useGetList, useDeleteItem } from '@/hook/post'

export default function ListItem() {
  const { data } = useGetList()
  const { mutate } = useDeleteItem()

  const handleDelete = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault()
    mutate(id)
  }

  return (
    <>
      {data &&
        data.map((el) => (
          <div key={el._id.toString()}>
            <Link href={`/detail/${el._id}`}>{el.title}</Link>
            <Link href={`/edit/${el._id}`}>✏️</Link>
            <button type="button" onClick={(e) => handleDelete(e, `${el._id}`)}>
              🗑️
            </button>
          </div>
        ))}
    </>
  )
}
