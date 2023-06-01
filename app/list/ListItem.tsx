'use client'

import { ObjectId } from 'mongodb'

interface ListItemProps {
  result: {
    _id: ObjectId | string
    title: string
    content: string
  }[]
}

export default function ListItem({ result }: ListItemProps) {
  return (
    <>
      {result.map((el) => (
        <div key={el.title}>{el.title}</div>
      ))}
    </>
  )
}
