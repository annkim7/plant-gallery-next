import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import MyList from './MyList'
import MyComm from './MyComm'
import MyLike from './MyLike'
import MyInfo from './MyInfo'
import Box from '@/components/Box'

export default async function Mypage() {
  let session = await getServerSession(authOptions)

  return (
    <Box label="마이페이지">
      {session ? (
        <>
          <MyInfo />
          <MyList />
          <MyComm />
          <MyLike />
        </>
      ) : (
        <div>로그인해주세요!</div>
      )}
    </Box>
  )
}
