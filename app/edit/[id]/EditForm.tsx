import { Session } from 'next-auth'
import { ListData } from '@/helpers/fetch'
import useInput from '@/hook/input'
import { useEditItem } from '@/hook/post'
import useUpload from '@/hook/upload'
import Input from '@/components/Input'
import Img from '@/components/Img'
import Upload from '@/components/Upload'
import Button from '@/components/Button'
import useModal from '@/hook/modal'
import Modal from '@/components/Modal'

interface EditFormProps {
  datum: ListData
  info: Session | null
}

export default function EditForm({ datum, info }: EditFormProps) {
  const { mutate } = useEditItem()
  const [title, titleBind] = useInput(datum.title)
  const [content, contentBind] = useInput(datum.content)
  const { src, handleFileChange } = useUpload()
  const [modal, handleModal] = useModal()

  const handleEdit: React.FormEventHandler = (e) => {
    e.preventDefault()

    if (!title || !content) {
      handleModal()
    } else {
      const formContent = {
        _id: datum._id,
        title,
        content,
        img: src === '' ? datum.img : src,
        author: info?.user?.email,
      }
      mutate(formContent)
    }
  }

  return (
    <>
      <form onSubmit={handleEdit}>
        <Input label="제목" values={titleBind} />
        <Input label="내용" values={contentBind} />
        <div className="flex mt-6 items-center justify-center">
          <Img width="auto" height="auto" src={datum.img} alt={datum.title} />
        </div>

        <Upload event={handleFileChange} />
        <div className="flex mt-6 items-center justify-center">
          <Img width="auto" height="auto" src={src} alt={'업로드한'} />
        </div>

        <div className="flex mt-6 mb-10 justify-center">
          <Button label="수정" style="square" />
        </div>
      </form>
      {modal && (
        <Modal
          label="입력 오류"
          text="입력창을 확인해주세요"
          func={handleModal}
          action={handleModal}
        />
      )}
    </>
  )
}
