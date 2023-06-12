'use client'

import useInput from '@/hook/input'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useAddMember } from '../../hook/member'

export default function MemForm() {
  const { mutate } = useAddMember()
  const [name, nameBind] = useInput('')
  const [email, emailBind] = useInput('')
  const [password, passwordBind] = useInput('')

  const handleMemForm: React.FormEventHandler = (e) => {
    e.preventDefault()

    const formContent = {
      name,
      email,
      password,
    }
    mutate(formContent)
  }

  return (
    <form onSubmit={handleMemForm}>
      <Input label="이름" values={nameBind} />
      <Input label="이메일" values={emailBind} />
      <Input label="비밀번호" values={passwordBind} type="password" />

      <div className="flex mt-6 mb-10 justify-center">
        <Button label="가입" type="submit" />
      </div>
    </form>
  )
}
