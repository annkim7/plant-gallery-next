import Label from './Label'

interface InputProps {
  label: string
  type?: 'text' | 'password'
  values: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
}

export default function Input({ label, type, values }: InputProps) {
  return (
    <>
      <Label label={label} />
      <input
        {...values}
        type={type ? type : 'text'}
        title={`${label} 쓰기`}
        placeholder={`${label}을 입력해주세요`}
        className="w-full px-2 py-2 bg-transparent border border-slate-200 rounded text-sm leading-4 dark:border-neutral-600 dark:text-neutral-200"
      ></input>
    </>
  )
}
