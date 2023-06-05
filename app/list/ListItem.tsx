'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { getList, deleteItem } from '@/hook/post'

export default function ListItem() {
  const { data } = useQuery(['list'], getList, { staleTime: 10 * 1000 })
  const mutation = useMutation({ mutationFn: deleteItem })

  const handleDelete = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault()
    mutation.mutate(id)
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
