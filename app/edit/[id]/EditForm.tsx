import { ObjectId } from 'mongodb'
import useInput from '@/hook/input'
import Input from '@/components/Input'

interface EditFormProps {
  datum: {
    _id: ObjectId
    title: string
    content: string
  }
}

export default function EditForm({ datum }: EditFormProps) {
  const [title, titleBind] = useInput(datum.title)
  const [content, contentBind] = useInput(datum.content)

  return (
    <form>
      <Input label="title" values={titleBind} />
      <Input label="content" values={contentBind} />
      <button type="submit">전송</button>
    </form>
  )
}
