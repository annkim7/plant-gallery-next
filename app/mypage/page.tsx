import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import MyList from './MyList'
import MyComm from './MyComm'

export default async function Mypage() {
  let session = await getServerSession(authOptions)

  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg">
        <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
          마이페이지
        </h3>
        {session?.user?.image && (
          <div className="relative w-16 h-16">
            <Image
              src={session?.user?.image}
              alt={`${session?.user?.name} 이미지`}
              fill
            />
          </div>
        )}
        <div>
          <strong>닉네임</strong>
          <span>{session?.user?.name}</span>
        </div>
        <div>
          <strong>이메일</strong>
          <span>{session?.user?.email}</span>
        </div>
        <MyList info={session} />
        <MyComm info={session} />
      </div>
    </article>
  )
}
