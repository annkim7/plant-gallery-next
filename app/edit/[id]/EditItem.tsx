'use client'

import { useGetItem } from '@/hook/post'
import EditForm from './EditForm'

interface ItemProps {
  id: string
}

export default function EditItem({ id }: ItemProps) {
  const { data } = useGetItem(id)

  return <>{data && <EditForm datum={data} />} </>
}
