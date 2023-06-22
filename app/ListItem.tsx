'use client'

import Link from 'next/link'
import { useGetList } from '@/hook/post'
import Loading from './loading'
import Img from '@/components/Img'
import Like from '@/components/Like'
import { Session } from 'next-auth'

interface ListItemProps {
  info: Session | null
}

export default function ListItem({ info }: ListItemProps) {
  const { data, isLoading } = useGetList()

  return (
    <>
      {isLoading && <Loading />}
      {data &&
        data.map((el) => (
          <div key={el._id.toString()}>
            <Link
              href={`/detail/${el._id}`}
              className="overflow-hidden block rounded-lg"
            >
              <Img width="full" height="auto" src={el.img} alt={el.title} />
            </Link>
            <Like id={`${el._id}`} access={info ? true : false} />
          </div>
        ))}
    </>
  )
}
