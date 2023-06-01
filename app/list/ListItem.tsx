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
        </div>
      ))}
    </>
  )
}
