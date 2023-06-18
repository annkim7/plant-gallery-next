'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import { useGetItem, useDeleteItem } from '@/hook/post'
import Image from 'next/image'
import { Session } from 'next-auth'
import Comment from './Comment'
import Author from './Author'
import Like from '@/components/Like'

interface ItemProps {
  id: string
  info: Session | null
}

export default function Item({ id, info }: ItemProps) {
  const { data } = useGetItem(id)
  const { mutate } = useDeleteItem()

  const handleDelete = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault()
    mutate(id)
  }

  return (
    <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg">
      <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
        {data?.title}
      </h3>

      {data && <Author email={data?.author || ''} />}
      {data && <Like id={`${data?._id}`} access={info ? true : false} />}

      <p>{data?.content}</p>
      {data?.img && (
        <div className="relative w-full pt-[100%]">
          <Image src={data?.img} alt={`${data?.title} 이미지`} fill />
        </div>
      )}

      <div className="flex mt-10 mb-3 justify-end gap-2">
        {info?.user?.email === data?.author && (
          <>
            <Link href={`/edit/${id}`} className="text-slate-400 text-sm">
              수정
            </Link>
            <Button
              label="삭제"
              type="button"
              func={(e) => handleDelete(e, `${id}`)}
            />
          </>
        )}
      </div>

      <Comment id={id} info={info} />
    </div>
  )
}
