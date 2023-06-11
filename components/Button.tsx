type ButtonStyleType = 'submit' | 'button' | 'reset'

const handleButtonStyleType = (type: ButtonStyleType) => {
  switch (type) {
    case 'submit':
      return `
        w-16 p-1.5 bg-blue-400 text-white text-xs rounded-sm
      `
    case 'button':
      return `
        text-slate-400 text-sm
      `
    case 'reset':
      return `
        w-16 p-1.5 bg-gray-400 text-white text-xs rounded-sm
      `
    default:
      throw new Error('지원하지 않는 타입입니다.')
  }
}

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  label: string
  func?: (e: any) => void
}

export default function Button({ type, label, func }: ButtonProps) {
  return (
    <button type={type} onClick={func} className={handleButtonStyleType(type)}>
      {label}
    </button>
  )
}
