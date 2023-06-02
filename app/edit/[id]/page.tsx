import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'

interface DetailProps {
  params: { id: string }
  searchParams: { search: string }
}

export default async function Edit(props: DetailProps) {
  if (!ObjectId.isValid(props.params.id)) {
    return notFound()
  }

  const db = (await connectDB).db('plant')
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) })

  if (result === null) {
    return notFound()
  }

  return (
    <article>
      <h3>수정하기</h3>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: 'none' }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">전송</button>
      </form>
    </article>
  )
}
