'use client'

import { Session } from 'next-auth'
import Img from '@/components/Img'
import Link from 'next/link'
import { useDeleteMember } from '@/hook/member'

interface InfoProps {
  info: Session | null
}

export default function MyInfo({ info }: InfoProps) {
  const { mutate } = useDeleteMember()

  const handleDelete = () => {
    mutate(info?.user?.email)
  }

  return (
    <div>
      <Img
        width="16"
        height="16"
        src={info?.user?.image}
        alt={info?.user?.name}
      />
      <div>
        <strong>닉네임</strong>
        <span>{info?.user?.name}</span>
      </div>
      <div>
        <strong>이메일</strong>
        <span>{info?.user?.email}</span>
      </div>

      <div>
        <button type="button">
          <Link href={`/userInfo/${info?.user?.email}`}>수정</Link>
        </button>
        <button type="button" onClick={handleDelete}>
          탈퇴
        </button>
      </div>
    </div>
  )
}
