import { useState, useEffect } from 'react'

export default function useTest(initial: string) {
  const [value, setValue] = useState(initial)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const number = value.search(/[0-9]/g)
    const lower = value.search(/[a-z]/gi)

    if ((value && number < 0) || (value && lower < 0)) {
      setMessage('영문, 숫자를 모두 사용하여 입력해주세요.')
    } else {
      setMessage('')
    }
  }, [value])

  return [setValue, message] as const
}
