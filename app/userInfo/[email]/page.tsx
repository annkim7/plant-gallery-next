import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import InfoForm from './InfoForm'
import Box from '@/components/Box'

export default async function UserInfo() {
  let session = await getServerSession(authOptions)

  return (
    <Box label="수정하기">
      {session ? <InfoForm /> : <div>로그인해주세요!</div>}
    </Box>
  )
}
