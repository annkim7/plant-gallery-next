'use client'

import useInput from '@/hook/input'
import useUpload from '@/hook/upload'
import Input from '@/components/Input'
import Img from '@/components/Img'
import Upload from '@/components/Upload'
import Button from '@/components/Button'
import { useEditMember } from '@/hook/member'
import { useSession } from 'next-auth/react'

export default function InfoForm() {
  const { data: session, update } = useSession()
  const { mutate } = useEditMember()
  const [name, nameBind] = useInput(session?.user?.name || '')
  const [password, passBind] = useInput('')
  const { src, handleFileChange } = useUpload()

  const handleEdit: React.FormEventHandler = async (e) => {
    e.preventDefault()
    const formContent = {
      name,
      email: session?.user?.email,
      password,
      image: src === '' ? session?.user?.image : src,
    }
    await mutate(formContent)
    await update({ name, image: src === '' ? session?.user?.image : src })
  }

  return (
    <form onSubmit={handleEdit}>
      <Input label="닉네임" values={nameBind} />
      <Input label="비밀번호" values={passBind} />
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
        <Button label="수정" type="submit" />
      </div>
    </form>
  )
}
