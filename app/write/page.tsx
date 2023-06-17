import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Form from './Form'

export default async function Wrtie() {
  let session = await getServerSession(authOptions)

  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg dark:border-neutral-600 dark:text-neutral-200">
        <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
          작성하기
        </h3>
        {session ? <Form info={session} /> : <div>로그인해주세요!</div>}
      </div>
    </article>
  )
}
