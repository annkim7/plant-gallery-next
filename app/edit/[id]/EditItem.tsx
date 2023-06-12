'use client'

import { useGetItem } from '@/hook/post'
import EditForm from './EditForm'
import { Session } from 'next-auth'

interface ItemProps {
  id: string
  info: Session | null
}

export default function EditItem({ id, info }: ItemProps) {
  const { data } = useGetItem(id)

  return <>{data && <EditForm datum={data} info={info} />} </>
}
