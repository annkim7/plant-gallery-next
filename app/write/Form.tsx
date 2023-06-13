'use client'

import { useAddItem } from '@/hook/post'
import useInput from '@/hook/input'
import Input from '@/components/Input'
import Image from 'next/image'
import useUpload from '@/hook/upload'
import Button from '@/components/Button'
import { Session } from 'next-auth'

interface FormProps {
  info: Session | null
}

export default function Form({ info }: FormProps) {
  const { mutate } = useAddItem()
  const [title, titleBind] = useInput('')
  const [content, contentBind] = useInput('')
  const { src, handleFileChange } = useUpload()

  const handleForm: React.FormEventHandler = (e) => {
    e.preventDefault()

    const formContent = {
      title,
      content,
      img: src,
      author: info?.user?.email,
    }
    mutate(formContent)
  }

  return (
    <form onSubmit={handleForm}>
      <Input label="제목" values={titleBind} />
      <Input label="내용" values={contentBind} />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {src && (
        <div className="relative w-60 h-60 mx-auto">
          <Image src={src} alt="업로드한 이미지" fill />
        </div>
      )}

      <div className="flex mt-6 mb-10 justify-center">
        <Button label="등록" type="submit" />
      </div>
    </form>
  )
}
