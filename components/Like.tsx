import { useEditLike, useGetLike } from '@/hook/like'
import { signIn } from 'next-auth/react'
import IconBtn from './IconBtn'

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
    <div className="flex items-center gap-1">
      <IconBtn style="heart" func={access ? handleLike : () => signIn()} />
      <span className="text-xs">
        {data?.map((el) => el.author)[0]
          ? data?.map((el) => el.author)[0].length
          : '0'}
      </span>
    </div>
  )
}
