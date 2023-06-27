import Heart from './Heart'

type IconStyleType = 'heart'

const handleIconBtnStyleType = (type: IconStyleType) => {
  switch (type) {
    case 'heart':
      return <Heart />
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
