import { useEditLike, useGetLike } from '@/hook/like'
import { signIn } from 'next-auth/react'

interface LikeProps {
  id: string
  access: boolean
}

export default function Like({ id, access }: LikeProps) {
  const { data } = useGetLike(id)
  const { mutate } = useEditLike()

  const handleLike = () => {
    mutate({
      _id: id,
    })
  }

  return (
    <div>
      <span>
        {data?.map((el) => el.author)[0]
          ? data?.map((el) => el.author)[0].length
          : '0'}
      </span>
      <button type="button" onClick={access ? handleLike : () => signIn()}>
        하트
      </button>
    </div>
  )
}
