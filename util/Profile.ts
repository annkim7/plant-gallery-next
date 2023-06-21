'use client'

import { userState } from '@/context/store'
import { useRecoilState } from 'recoil'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function useUserInfo() {
  const [user, setUserState] = useRecoilState(userState)

  let session = useSession()

  useEffect(() => {
    if (session) {
      console.log(session)
    }
  }, [session])

  return user
}
