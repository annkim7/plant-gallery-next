import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import Item from './Item'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

interface DetailProps {
  params: { id: string }
  searchParams: { search: string }
}

export default async function Detail(props: DetailProps) {
  if (!ObjectId.isValid(props.params.id)) {
    return notFound()
  }

  let session = await getServerSession(authOptions)

  return <Item id={props.params.id} info={session} />
}
