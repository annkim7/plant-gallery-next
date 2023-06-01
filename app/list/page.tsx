import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import ListItem from './ListItem'

export interface ListProps {
  _id: ObjectId | string
  title: string
  content: string
}

export default async function List() {
  let client = await connectDB
  const db = client.db('plant')
  let result = await db.collection<ListProps>('post').find().toArray()

  result = result.map((item) => {
    item._id = item._id.toString()
    return item
  })

  return (
    <div className="border border-indigo-600">
      <ListItem result={result} />
    </div>
  )
}
