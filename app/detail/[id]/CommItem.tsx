import { useState } from 'react'
import { CommentData } from '@/helpers/comm'
import { useEditComment, useDeleteComment } from '@/hook/comment'
import useInput from '@/hook/input'
import Input from '@/components/Input'
import Button from '@/components/Button'
import IconBtn from '@/components/IconBtn'

interface CommItemProps {
  datum: CommentData
}

export default function CommItem({ datum }: CommItemProps) {
  const [comment, commBind] = useInput(datum.content)
  const [active, setActive] = useState(false)
  const { mutate: editMutate } = useEditComment()
  const { mutate: deleteMutate } = useDeleteComment()

  const handleInput = () => {
    setActive(!active)
  }

  const handleCommEdit = () => {
    editMutate({
      _id: datum._id,
      content: comment,
      parent: datum.parent,
      author: datum.author,
      name: datum.name,
    })
  }

  const handleCommDel = (id: string) => {
    deleteMutate(id)
  }

  return (
    <>
      <div className="shrink-0">
        <IconBtn style="edit" func={handleInput} />
        <IconBtn style="del" func={() => handleCommDel(`${datum._id}`)} />
      </div>

      {active && (
        <div className="grid mb-3 w-full grid-cols-7 rounded">
          <Input label="댓글 수정" values={commBind} style="with-button" />
          <Button label="확인" style="no-round" func={handleCommEdit} />
          <Button label="닫기" style="half-round" func={handleInput} />
        </div>
      )}
    </>
  )
}
