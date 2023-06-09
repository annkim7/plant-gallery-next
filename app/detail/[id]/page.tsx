import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import Item from './Item'

interface DetailProps {
  params: { id: string }
  searchParams: { search: string }
}

export default async function Detail(props: DetailProps) {
  if (!ObjectId.isValid(props.params.id)) {
    return notFound()
  }

  return (
    <article className="py-8 px-2.5">
      <Item id={props.params.id} />
    </article>
  )
}
