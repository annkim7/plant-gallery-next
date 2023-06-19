import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import InfoForm from './InfoForm'

export default async function UserInfo() {
  let session = await getServerSession(authOptions)

  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg">
        <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
          수정하기
        </h3>
        {session ? <InfoForm info={session} /> : <div>로그인해주세요!</div>}
      </div>
    </article>
  )
}
