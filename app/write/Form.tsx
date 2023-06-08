'use client'

import { useAddItem } from '@/hook/post'
import useInput from '@/hook/input'
import Input from '@/components/Input'
import Button from '../../components/Button'

export default function Form() {
  const { mutate } = useAddItem()
  const [title, titleBind] = useInput('')
  const [content, contentBind] = useInput('')

  const handleForm: React.FormEventHandler = (e) => {
    e.preventDefault()
    const formContent = {
      title,
      content,
    }
    mutate(formContent)
  }

  return (
    <form onSubmit={handleForm}>
      <Input label="title" values={titleBind} />
      <Input label="content" values={contentBind} />
      <Button label="등록" type="submit" />
    </form>
  )
}
