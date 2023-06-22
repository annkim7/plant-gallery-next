import Img from '@/components/Img'
import { useGetMember } from '@/hook/member'

interface AuthorProps {
  email: string
}

export default function Author({ email }: AuthorProps) {
  const { data } = useGetMember(email)

  return (
    <div className="flex items-center justify-end gap-1">
      {data && (
        <div className="overflow-hidden w-4 h-4 rounded-full">
          <Img
            width="auto"
            height="auto"
            src={data?.image || `${process.env.NEXT_PUBLIC_BASE_AVATAR_IMG}`}
            alt={data?.name}
          />
        </div>
      )}
      <span className="text-xs">{data?.name}</span>
    </div>
  )
}
