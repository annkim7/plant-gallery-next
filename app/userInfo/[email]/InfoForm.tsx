'use client'

import { Session } from 'next-auth'
import useInput from '@/hook/input'
import useUpload from '@/hook/upload'
import Input from '@/components/Input'
import Img from '@/components/Img'
import Upload from '@/components/Upload'
import Button from '@/components/Button'
import { useEditMember } from '@/hook/member'

interface EditFormProps {
  info: Session | null
}

export default function InfoForm({ info }: EditFormProps) {
  const { mutate } = useEditMember()
  const [name, nameBind] = useInput(info?.user?.name || '')
  const [password, passBind] = useInput('')
  const { src, handleFileChange } = useUpload()

  const handleEdit: React.FormEventHandler = (e) => {
    e.preventDefault()
    const formContent = {
      name,
      email: info?.user?.email,
      password,
      image: src === '' ? info?.user?.image : src,
    }
    mutate(formContent)
  }

  return (
    <form onSubmit={handleEdit}>
      <Input label="닉네임" values={nameBind} />
      <Input label="비밀번호" values={passBind} />
      <div className="flex mt-6 items-center justify-center">
        <Img
          width="auto"
          height="auto"
          src={info?.user?.image}
          alt={info?.user?.name}
        />
      </div>

      <Upload event={handleFileChange} />
      <div className="flex mt-6 items-center justify-center">
        <Img width="auto" height="auto" src={src} alt={'업로드한'} />
      </div>

      <div className="flex mt-6 mb-10 justify-center">
        <Button label="수정" type="submit" />
      </div>
    </form>
  )
}
