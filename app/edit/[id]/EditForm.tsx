import { ObjectId } from 'mongodb'
import useInput from '@/hook/input'
import Input from '@/components/Input'
import { useEditItem } from '@/hook/post'
import Button from '@/components/Button'

interface EditFormProps {
  datum: {
    _id: ObjectId
    title: string
    content: string
  }
}

export default function EditForm({ datum }: EditFormProps) {
  const { mutate } = useEditItem()
  const [title, titleBind] = useInput(datum.title)
  const [content, contentBind] = useInput(datum.content)

  const handleEdit: React.FormEventHandler = (e) => {
    e.preventDefault()
    const formContent = {
      _id: datum._id,
      title,
      content,
    }
    mutate(formContent)
  }

  return (
    <form onSubmit={handleEdit}>
      <Input label="title" values={titleBind} />
      <Input label="content" values={contentBind} />
      <Button label="수정" type="submit" />
    </form>
  )
}
