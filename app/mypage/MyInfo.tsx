'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useDeleteMember } from '@/hook/member'
import useModal from '@/hook/modal'
import Img from '@/components/Img'
import Modal from '@/components/Modal'
import Button from '@/components/Button'

export default function MyInfo() {
  const router = useRouter()
  const { data: session } = useSession()
  const { mutate } = useDeleteMember()
  const [modal, handleModal] = useModal()

  const handleDelete = () => {
    mutate(session?.user?.email)
  }

  const handlePage = () => {
    router.push(`/userInfo/${session?.user?.email}`)
  }

  return (
    <>
      <section className="grid my-4 pb-4 grid-cols-5 grid-rows-3 items-center border-b-2 border-zinc-200 dark:border-neutral-600">
        <div className="overflow-hidden w-16 h-16 rounded-full col-span-5 mx-auto row-span-3 sm:col-span-1">
          <Img
            width="16"
            height="16"
            src={session?.user?.image}
            alt={session?.user?.name}
          />
        </div>

        {[
          { name: '이메일', value: session?.user?.email },
          { name: '닉네임', value: session?.user?.name },
        ].map((el) => (
          <div className="col-span-4 row-span-1 break-all" key={el.name}>
            <strong className="text-base font-bold text-blue-500">
              {el.name}
            </strong>
            <span className="pl-2 text-base font-medium text-slate-600">
              {el.value}
            </span>
          </div>
        ))}

        <div className="flex col-span-4 row-span-1 gap-1">
          <Button label="수정" style="border" func={handlePage} />
          <Button label="탈퇴" style="border" func={handleModal} />
        </div>
      </section>

      {modal && <Modal func={handleModal} action={handleDelete} />}
    </>
  )
}
