import { useEditLike, useGetLike } from '@/hook/like'
import { signIn, useSession } from 'next-auth/react'
import IconBtn from './IconBtn'

interface LikeProps {
  id: string
  access: boolean
}

export default function Like({ id, access }: LikeProps) {
  const { data } = useGetLike(id)
  const { mutate } = useEditLike()
  const { data: session } = useSession()

  const handleLike = () => {
    mutate({
      _id: id,
    })
  }

  const likeArray = data?.map((el) => el.author)[0]
  const check = likeArray?.filter((el) => el === session?.user?.email)[0]

  return (
    <div className="flex items-center gap-1">
      <IconBtn
        style={check ? 'full-heart' : 'heart'}
        func={access ? handleLike : () => signIn()}
      />
      <span className="text-xs">{likeArray ? likeArray.length : '0'}</span>
    </div>
  )
}
