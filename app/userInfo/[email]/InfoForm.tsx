'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import useInput from '@/hook/input'
import useUpload from '@/hook/upload'
import { useEditMember } from '@/hook/member'
import { usePassTest } from '@/hook/regex'
import useModal from '@/hook/modal'
import Input from '@/components/Input'
import Img from '@/components/Img'
import Upload from '@/components/Upload'
import Button from '@/components/Button'
import Modal from '@/components/Modal'

export default function InfoForm() {
  const { data: session, update } = useSession()
  const { mutate } = useEditMember()
  const [name, nameBind] = useInput(session?.user?.name || '')
  const [password, passBind] = useInput('')
  const [checkPass, passMessage] = usePassTest('')
  const { src, handleFileChange } = useUpload()
  const [modal, handleModal] = useModal()

  const handleEdit: React.FormEventHandler = async (e) => {
    e.preventDefault()

    if (!name || !password || passMessage) {
      handleModal()
    } else {
      const formContent = {
        name,
        email: session?.user?.email,
        password,
        image: src === '' ? session?.user?.image : src,
      }
      await mutate(formContent)
      await update({ name, image: src === '' ? session?.user?.image : src })
    }
  }

  useEffect(() => {
    checkPass(password)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password])

  return (
    <>
      <form onSubmit={handleEdit}>
        <Input label="닉네임" values={nameBind} />
        <Input label="비밀번호" values={passBind} type="password" />
        {passMessage && <div>{passMessage}</div>}
        <div className="flex mt-6 items-center justify-center">
          <Img
            width="auto"
            height="auto"
            src={session?.user?.image}
            alt={session?.user?.name}
          />
        </div>

        <Upload event={handleFileChange} />
        <div className="flex mt-6 items-center justify-center">
          <Img width="auto" height="auto" src={src} alt={'업로드한'} />
        </div>

        <div className="flex mt-6 mb-10 justify-center">
          <Button label="수정" style="square" />
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
