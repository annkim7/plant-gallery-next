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
      <Input label="제목" values={titleBind} />
      <Input label="내용" values={contentBind} />

      <div className="flex mt-6 mb-10 justify-center">
        <Button label="등록" type="submit" />
      </div>
    </form>
  )
}
