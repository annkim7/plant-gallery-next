import { useState } from 'react'

export default function useUpload() {
  const [src, setSrc] = useState('')

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e,
  ) => {
    e.preventDefault()

    if (!e.target.files) return

    let file = e.target.files[0]
    let filename = encodeURIComponent(file.name)
    let res = await fetch('/api/post/image?file=' + filename)
    res = await res.json()

    const formData = new FormData()
    Object.entries({
      ...(res as any).fields,
      file,
    }).forEach(([key, value]) => {
      formData.append(key, value as any)
    })

    let result = await fetch(res.url, {
      method: 'POST',
      body: formData,
    })

    if (result.ok) {
      setSrc(result.url + '/' + filename)
    } else {
      console.log('업로드에 실패하였습니다')
    }
  }

  return { src, handleFileChange }
}
