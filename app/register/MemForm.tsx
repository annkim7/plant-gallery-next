'use client'

import { useEffect } from 'react'
import useInput from '@/hook/input'
import { useAddMember } from '@/hook/member'
import useUpload from '@/hook/upload'
import { useEmailTest, usePassTest } from '@/hook/regex'
import useModal from '@/hook/modal'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Img from '@/components/Img'
import Upload from '@/components/Upload'
import Modal from '@/components/Modal'

export default function MemForm() {
  const { mutate } = useAddMember()
  const [name, nameBind] = useInput('')
  const [email, emailBind] = useInput('')
  const [checkEmail, emailMessage] = useEmailTest('')
  const [password, passwordBind] = useInput('')
  const [checkPass, passMessage] = usePassTest('')
  const { src, handleFileChange } = useUpload()
  const [modal, handleModal] = useModal()

  const handleMemForm: React.FormEventHandler = (e) => {
    e.preventDefault()

    if (!name || !email || !password || passMessage || emailMessage) {
      handleModal()
    } else {
      const formContent = {
        name,
        email,
        password,
        image: src || `${process.env.NEXT_PUBLIC_BASE_AVATAR_IMG}`,
      }
      mutate(formContent)
    }
  }

  useEffect(() => {
    checkPass(password)
    checkEmail(email)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, email])

  return (
    <>
      <form onSubmit={handleMemForm}>
        <Input label="이름" values={nameBind} />
        <Input label="이메일" values={emailBind} />
        {emailMessage && <div>{emailMessage}</div>}
        <Input label="비밀번호" values={passwordBind} type="password" />
        {passMessage && <div>{passMessage}</div>}

        <Upload event={handleFileChange} />
        <div className="flex mt-6 items-center justify-center">
          <Img width="auto" height="auto" src={src} alt={'업로드한'} />
        </div>

        <div className="flex mt-6 mb-10 justify-center">
          <Button label="가입" style="square" />
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
