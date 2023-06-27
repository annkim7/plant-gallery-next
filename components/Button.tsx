type ButtonStyleType = 'round' | 'border' | 'square'

const handleButtonStyleType = (type: ButtonStyleType) => {
  switch (type) {
    case 'square':
      return `
      text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
      `
    case 'border':
      return `
        text-slate-400 text-sm
      `
    case 'round':
      return `
        w-16 p-1.5 bg-gray-400 text-white text-xs rounded-sm
      `
    default:
      throw new Error('지원하지 않는 타입입니다.')
  }
}

interface ButtonProps {
  label: string
  style: ButtonStyleType
  func?: (e: any) => void
}

export default function Button({ label, style, func }: ButtonProps) {
  return (
    <button
      type={func ? 'button' : 'submit'}
      onClick={func}
      className={handleButtonStyleType(style)}
    >
      {label}
    </button>
  )
}
