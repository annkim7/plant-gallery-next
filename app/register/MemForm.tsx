'use client'

import useInput from '@/hook/input'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useAddMember } from '@/hook/member'
import Upload from '@/components/Upload'
import useUpload from '@/hook/upload'
import Img from '@/components/Img'

export default function MemForm() {
  const { mutate } = useAddMember()
  const [name, nameBind] = useInput('')
  const [email, emailBind] = useInput('')
  const [password, passwordBind] = useInput('')
  const { src, handleFileChange } = useUpload()

  const handleMemForm: React.FormEventHandler = (e) => {
    e.preventDefault()

    const formContent = {
      name,
      email,
      password,
      image: src || `${process.env.NEXT_PUBLIC_BASE_AVATAR_IMG}`,
    }
    mutate(formContent)
  }

  return (
    <form onSubmit={handleMemForm}>
      <Input label="이름" values={nameBind} />
      <Input label="이메일" values={emailBind} />
      <Input label="비밀번호" values={passwordBind} type="password" />

      <Upload event={handleFileChange} />
      <div className="flex mt-6 items-center justify-center">
        <Img width="auto" height="auto" src={src} alt={'업로드한'} />
      </div>

      <div className="flex mt-6 mb-10 justify-center">
        <Button label="가입" type="submit" />
      </div>
    </form>
  )
}
