'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useDeleteMember } from '@/hook/member'
import useModal from '@/hook/modal'
import Img from '@/components/Img'
import Modal from '@/components/Modal'

export default function MyInfo() {
  const { data: session } = useSession()
  const { mutate } = useDeleteMember()
  const [modal, handleModal] = useModal()

  const handleDelete = () => {
    mutate(session?.user?.email)
  }

  return (
    <>
      <div>
        <Img
          width="16"
          height="16"
          src={session?.user?.image}
          alt={session?.user?.name}
        />
        <div>
          <strong>닉네임</strong>
          <span>{session?.user?.name}</span>
        </div>
        <div>
          <strong>이메일</strong>
          <span>{session?.user?.email}</span>
        </div>

        <div>
          <button type="button">
            <Link href={`/userInfo/${session?.user?.email}`}>수정</Link>
          </button>
          <button type="button" onClick={handleModal}>
            탈퇴
          </button>
        </div>
      </div>
      {modal && <Modal func={handleModal} action={handleDelete} />}
    </>
  )
}
