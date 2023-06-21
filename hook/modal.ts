import { useState } from 'react'

export default function useModal() {
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  return [modal, handleModal] as const
}
