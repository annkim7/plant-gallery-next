'use client'

import Link from 'next/link'
import { useGetList } from '@/hook/post'
import Image from 'next/image'
import Loading from '../loading'

export default function ListItem() {
  const { data, isLoading } = useGetList()

  return (
    <>
      {isLoading && <Loading />}
      {data &&
        data.map((el) => (
          <div key={el._id.toString()}>
            <Link href={`/detail/${el._id}`} className="block">
              <div className="relative w-full h-auto mx-auto">
                <Image
                  src={el.img}
                  alt="자연"
                  fill
                  className="!relative !h-auto !top-auto !left-auto !right-auto !bottom-auto rounded-lg"
                />
              </div>
            </Link>
          </div>
        ))}
    </>
  )
}
