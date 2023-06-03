'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getList } from './fetch'

export default function ListItem() {
  const { data } = useQuery(['list'], getList, { staleTime: 10 * 1000 })

  return (
    <>
      {data &&
        data.map((el) => (
          <div key={el.title}>
            <Link href={`/detail/${el._id}`}>{el.title}</Link>
            <Link href={`/edit/${el._id}`}>✏️</Link>
            <button
              type="button"
              onClick={(e) => {
                fetch('/api/post/delete', {
                  method: 'POST',
                  body: `${el._id}`,
                })
              }}
            >
              🗑️
            </button>
          </div>
        ))}
    </>
  )
}
