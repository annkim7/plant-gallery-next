'use client'

import Link from 'next/link'
import { useGetList } from '@/hook/post'
import Image from 'next/image'

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
              <div className="relative w-60 h-60 mx-auto">
                <Image src={el.img} alt="자연" fill />
              </div>
            </Link>
          </div>
        ))}
    </>
  )
}
