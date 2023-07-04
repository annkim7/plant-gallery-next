import { Heart, Pencil, Trash, Plus, FullHeart } from './Icon'

type IconStyleType = 'heart' | 'full-heart' | 'edit' | 'del' | 'add'

const handleIconBtnStyleType = (type: IconStyleType) => {
  switch (type) {
    case 'edit':
      return <Pencil />
    case 'heart':
      return <Heart />
    case 'full-heart':
      return <FullHeart />
    case 'del':
      return <Trash />
    case 'add':
      return <Plus />

    default:
      throw new Error('지원하지 않는 타입입니다.')
  }
}

interface IconBtnProps {
  style: IconStyleType
  func?: (e: any) => void
}

export default function IconBtn({ style, func }: IconBtnProps) {
  return (
    <button type="button" onClick={func}>
      {handleIconBtnStyleType(style)}
    </button>
  )
}
