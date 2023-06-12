import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import EditItem from './EditItem'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

interface DetailProps {
  params: { id: string }
  searchParams: { search: string }
}

export default async function Edit(props: DetailProps) {
  if (!ObjectId.isValid(props.params.id)) {
    return notFound()
  }

  let session = await getServerSession(authOptions)

  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg">
        <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
          수정하기
        </h3>
        <EditItem id={props.params.id} info={session} />
      </div>
    </article>
  )
}
