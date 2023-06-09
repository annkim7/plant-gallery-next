import { useState } from 'react'

export default function useInput(initial: string) {
  const [value, setValue] = useState(initial)

  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  }

  const reset = () => {
    setValue('')
  }

  return [value, bind, reset] as const
}
