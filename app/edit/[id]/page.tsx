import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import EditItem from './EditItem'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Box from '@/components/Box'

interface DetailProps {
  params: { id: string }
  searchParams: { search: string }
}

export default async function Edit(props: DetailProps) {
  if (!ObjectId.isValid(props.params.id)) {
    return notFound()
  }

  let session = await getServerSession(authOptions)

  return (
    <Box label="수정하기">
      <EditItem id={props.params.id} info={session} />
    </Box>
  )
}
