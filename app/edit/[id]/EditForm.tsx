import useInput from '@/hook/input'
import Input from '@/components/Input'
import { useEditItem } from '@/hook/post'
import Button from '@/components/Button'
import Image from 'next/image'
import useUpload from '../../../hook/upload'
import { ListData } from '@/helpers/fetch'

interface EditFormProps {
  datum: ListData
}

export default function EditForm({ datum }: EditFormProps) {
  const { mutate } = useEditItem()
  const [title, titleBind] = useInput(datum.title)
  const [content, contentBind] = useInput(datum.content)
  const { src, handleFileChange } = useUpload()

  const handleEdit: React.FormEventHandler = (e) => {
    e.preventDefault()
    const formContent = {
      _id: datum._id,
      title,
      content,
      img: src === '' ? datum.img : src,
    }
    mutate(formContent)
  }

  console.log(src)

  return (
    <form onSubmit={handleEdit}>
      <Input label="제목" values={titleBind} />
      <Input label="내용" values={contentBind} />
      <div className="relative w-full h-16">
        <Image src={datum.img} alt={`${datum.title} 이미지`} fill />
      </div>

      <input type="file" accept="image/*" onChange={handleFileChange} />
      {src && (
        <div className="relative w-full h-16">
          <Image src={src} alt="업로드한 이미지" fill />
        </div>
      )}

      <div className="flex mt-6 mb-10 justify-center">
        <Button label="수정" type="submit" />
      </div>
    </form>
  )
}
