'use client'

import { useGetItem } from '@/hook/post'
import EditForm from './EditForm'
import { Session } from 'next-auth'
import Loading from '@/app/loading'

interface ItemProps {
  id: string
  info: Session | null
}

export default function EditItem({ id, info }: ItemProps) {
  const { data, isLoading } = useGetItem(id)

  return (
    <>
      {isLoading && <Loading />}
      {data && <EditForm datum={data} info={info} />}
    </>
  )
}
