import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'

interface DetailProps {
  params: { id: string }
  searchParams: { search: string }
}

export default async function Detail(props: DetailProps) {
  if (!ObjectId.isValid(props.params.id)) {
    return notFound()
  }

  let db = (await connectDB).db('plant')
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) })

  if (result === null) {
    return notFound()
  }

  return (
    <div>
      <h4>{result.title}</h4>
    </div>
  )
}
