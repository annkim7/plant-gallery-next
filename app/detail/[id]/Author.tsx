import { useGetMember } from '@/hook/member'
import Image from 'next/image'

interface AuthorProps {
  email: string
}

export default function Author({ email }: AuthorProps) {
  const { data } = useGetMember(email)

  return (
    <div className="relative w-16 h-16">
      {data && (
        <Image
          src={data?.image || `${process.env.NEXT_PUBLIC_BASE_AVATAR_IMG}`}
          alt={`${data?.name} 이미지`}
          fill
        />
      )}
      <span>By {data?.name}</span>
    </div>
  )
}
