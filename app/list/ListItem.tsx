'use client'

import Link from 'next/link'
import { useGetList } from '@/hook/post'

export default function ListItem() {
  const { data } = useGetList()

  return (
    <>
      {data &&
        data.map((el) => (
          <div
            key={el._id.toString()}
            className="border border-zinc-200 rounded"
          >
            <Link href={`/detail/${el._id}`} className="block px-3 py-3">
              {el.title}
            </Link>
          </div>
        ))}
    </>
  )
}
