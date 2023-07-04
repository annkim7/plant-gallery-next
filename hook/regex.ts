import { useState, useEffect } from 'react'

export const usePassTest = (initial: string) => {
  const [value, setValue] = useState(initial)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const number = value.search(/[0-9]/g)
    const lower = value.search(/[a-z]/gi)
    const blank = value.search(/\s/)

    if ((value && number < 0) || (value && lower < 0)) {
      setMessage('영문, 숫자를 모두 사용하여 입력해주세요.')
    } else if (value && value.length < 8) {
      setMessage('8자리 이상으로 입력해주세요')
    } else if (blank !== -1) {
      setMessage('공백 없이 입력해주세요.')
    } else {
      setMessage('')
    }
  }, [value])

  return [setValue, message] as const
}

export const useEmailTest = (initial: string) => {
  const [value, setValue] = useState(initial)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const check = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/

    if (value && !check.test(value)) {
      setMessage('이메일 형식이 아닙니다')
    } else {
      setMessage('')
    }
  }, [value])

  return [setValue, message] as const
}
