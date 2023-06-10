'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import { useGetItem, useDeleteItem } from '@/hook/post'

interface ItemProps {
  id: string
}

export default function Item({ id }: ItemProps) {
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
      <p>{data?.content}</p>

      <div className="flex mt-10 mb-3 justify-end gap-2">
        <Link href={`/edit/${id}`} className="text-slate-400 text-sm">
          수정
        </Link>
        <Button
          label="삭제"
          type="button"
          func={(e) => handleDelete(e, `${id}`)}
        />
      </div>
    </div>
  )
}
