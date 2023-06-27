import Label from './Label'

type InputStyleType = 'original' | 'with-button'

const handleInputStyleType = (type: InputStyleType) => {
  switch (type) {
    case 'original':
      return `
        w-full px-2 py-2 bg-transparent border border-neutral-300 rounded text-smdark:border-neutral-600 dark:text-neutral-200
      `
    case 'with-button':
      return `
        w-full px-2 py-2 col-span-5 bg-transparent text-sm border border-neutral-300 rounded-l dark:border-neutral-600 dark:text-neutral-200
      `
    default:
      throw new Error('지원하지 않는 타입입니다.')
  }
}

interface InputProps {
  label: string
  style?: InputStyleType
  type?: 'text' | 'password'
  values: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
}

export default function Input({ label, style, type, values }: InputProps) {
  return (
    <>
      <Label label={label} />
      <input
        {...values}
        type={type ? type : 'text'}
        title={`${label} 쓰기`}
        placeholder={`${label}을 입력해주세요`}
        className={handleInputStyleType(!style ? 'original' : style)}
      />
    </>
  )
}
