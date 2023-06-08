import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import EditItem from './EditItem'

interface DetailProps {
  params: { id: string }
  searchParams: { search: string }
}

export default async function Edit(props: DetailProps) {
  if (!ObjectId.isValid(props.params.id)) {
    return notFound()
  }

  return (
    <article>
      <h3>수정하기</h3>
      <EditItem id={props.params.id} />
    </article>
  )
}
