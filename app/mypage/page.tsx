import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import MyList from './MyList'
import MyComm from './MyComm'
import MyLike from './MyLike'
import MyInfo from './MyInfo'

export default async function Mypage() {
  let session = await getServerSession(authOptions)

  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg dark:border-neutral-600">
        {session ? (
          <>
            <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
              마이페이지
            </h3>

            <MyInfo />
            <MyList />
            <MyComm />
            <MyLike />
          </>
        ) : (
          <div>로그인해주세요!</div>
        )}
      </div>
    </article>
  )
}
