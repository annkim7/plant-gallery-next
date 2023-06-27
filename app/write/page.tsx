import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Form from './Form'
import Box from '@/components/Box'

export default async function Wrtie() {
  let session = await getServerSession(authOptions)

  return (
    <Box label="작성하기">
      {session ? <Form info={session} /> : <div>로그인해주세요!</div>}
    </Box>
  )
}
