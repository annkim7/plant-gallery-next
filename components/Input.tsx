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
      <h3>{label}</h3>
      <input
        {...values}
        type="text"
        title={`${label} 쓰기`}
        placeholder={label}
      ></input>
    </>
  )
}
