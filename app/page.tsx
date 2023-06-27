import HydratedList from './HydratedList'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function Home() {
  let session = await getServerSession(authOptions)

  return (
    <div>
      {/* <div className="grid py-8 px-2.5 gap-4 grid-cols-masonry auto-rows-[0.5rem]"> */}
      {/* @ts-expect-error Server Component */}
      <HydratedList info={session} />
    </div>
  )
}
