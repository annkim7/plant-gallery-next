'use client'

import { Session } from 'next-auth'
import { useAddItem } from '@/hook/post'
import useInput from '@/hook/input'
import useUpload from '@/hook/upload'
import Input from '@/components/Input'
import Img from '@/components/Img'
import Upload from '@/components/Upload'
import Button from '@/components/Button'
import useModal from '@/hook/modal'
import Modal from '@/components/Modal'

interface FormProps {
  info: Session | null
}

export default function Form({ info }: FormProps) {
  const { mutate } = useAddItem()
  const [title, titleBind] = useInput('')
  const [content, contentBind] = useInput('')
  const { src, handleFileChange } = useUpload()
  const [modal, handleModal] = useModal()

  const handleForm: React.FormEventHandler = (e) => {
    e.preventDefault()

    if (!title || !content || !src) {
      handleModal()
    } else {
      const formContent = {
        title,
        content,
        img: src,
        author: info?.user?.email,
      }
      mutate(formContent)
    }
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <Input label="제목" values={titleBind} />
        <Input label="내용" values={contentBind} />

        <Upload event={handleFileChange} />
        <div className="flex mt-6 items-center justify-center">
          <Img width="auto" height="auto" src={src} alt={'업로드한'} />
        </div>

        <div className="flex mt-10 mb-6 justify-center">
          <Button label="등록" style="square" />
        </div>
      </form>
      {modal && (
        <Modal
          label="입력 오류"
          text="입력창을 확인해주세요"
          func={handleModal}
          action={handleModal}
        />
      )}
    </>
  )
}
