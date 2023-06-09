interface InputProps {
  label: string
  values: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
}

export default function Input({ label, values }: InputProps) {
  return (
    <>
      <h3 className="my-3 text-base font-medium text-slate-600">{label}</h3>
      <input
        {...values}
        type="text"
        title={`${label} 쓰기`}
        placeholder={`${label}을 입력해주세요`}
        className="w-full px-2 py-2 border border-slate-200 rounded text-sm leading-4"
      ></input>
    </>
  )
}
