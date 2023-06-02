'use client'

import { ListProps } from './page'
import Link from 'next/link'

interface ListItemProps {
  result: ListProps[]
}

export default function ListItem({ result }: ListItemProps) {
  return (
    <>
      {result.map((el) => (
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
