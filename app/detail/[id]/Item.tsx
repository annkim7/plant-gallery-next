'use client'

import Link from 'next/link'
import { useGetItem, useDeleteItem } from '@/hook/post'
import { Session } from 'next-auth'
import Comment from './Comment'
import Author from './Author'
import Like from '@/components/Like'
import Button from '@/components/Button'
import Img from '@/components/Img'
import Box from '@/components/Box'
import Loading from '@/app/loading'

interface ItemProps {
  id: string
  info: Session | null
}

export default function Item({ id, info }: ItemProps) {
  const { data, isLoading } = useGetItem(id)
  const { mutate } = useDeleteItem()

  const handleDelete = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault()
    mutate(id)
  }

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <Box label={data?.title || ''}>
          <div className="flex mt-3 items-center justify-end gap-2">
            {data && <Author email={data?.author || ''} />}
            {data && <Like id={`${data?._id}`} access={info ? true : false} />}
          </div>

          {data?.img && (
            <div className="flex mt-6 items-center justify-center">
              <Img width="auto" height="auto" src={data.img} alt={data.title} />
            </div>
          )}
          <p className="mt-8 px-2 py-4 border-b-2 border-zinc-200 dark:border-neutral-600 text-neutral-600">
            {data?.content}
          </p>

          {info?.user?.email === data?.author && (
            <div className="flex mt-2 mb-3 justify-end gap-2">
              <Link href={`/edit/${id}`} className="text-slate-400 text-sm">
                수정
              </Link>
              <Button
                label="삭제"
                func={(e) => handleDelete(e, `${id}`)}
                style="border"
              />
            </div>
          )}

          <Comment id={id} info={info} />
        </Box>
      )}
    </>
  )
}
