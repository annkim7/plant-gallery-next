import HydratedList from './HydratedList'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import IconBtn from '@/components/IconBtn'

export default async function Home() {
  let session = await getServerSession(authOptions)

  return (
    <div className="p-3">
      <Link
        href="/write"
        className="fixed flex w-16 h-16 bottom-6 right-6 items-center justify-center rounded-full bg-blue-500 z-[999]"
      >
        <IconBtn style="add" />
      </Link>
      {/* @ts-expect-error Server Component */}
      <HydratedList info={session} />
    </div>
  )
}
