'use client'

import { useAddItem } from '@/hook/post'
import useInput from '@/hook/input'
import Input from '@/components/Input'
import Button from '../../components/Button'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Form() {
  const { mutate } = useAddItem()
  const [title, titleBind] = useInput('')
  const [content, contentBind] = useInput('')

  const [src, setSrc] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e,
  ) => {
    e.preventDefault()

    // if (!e.target.files) return

    // const file = e.target.files[0]

    // if (file) {
    //   let image = window.URL.createObjectURL(file)
    //   setSrc(image)
    //   setImageFile(file)
    // }
    if (!e.target.files) return

    let file = e.target.files[0]
    let filename = encodeURIComponent(file.name)
    let res = await fetch('/api/post/image?file=' + filename)
    res = await res.json()

    const formData = new FormData()
    Object.entries({ ...(res as any).fields, file }).forEach(([key, value]) => {
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

  const handleForm: React.FormEventHandler = (e) => {
    e.preventDefault()

    const formContent = {
      title,
      content,
      img: src,
    }
    mutate(formContent)
  }

  return (
    <form onSubmit={handleForm}>
      <Input label="제목" values={titleBind} />
      <Input label="내용" values={contentBind} />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {src && (
        <div className="relative w-16 h-16">
          <Image src={src} alt="업로드한 이미지" fill />
        </div>
      )}

      <div className="flex mt-6 mb-10 justify-center">
        <Button label="등록" type="submit" />
      </div>
    </form>
  )
}
