interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  label: string
  func?: () => void
}

export default function Button({ type, label, func }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={func}
      className="p-1.5 bg-blue-400 text-white text-xs rounded-sm"
    >
      {label}
    </button>
  )
}
