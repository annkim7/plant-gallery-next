import { useState } from 'react'
import { CommentData } from '@/helpers/comm'
import { useEditComment, useDeleteComment } from '@/hook/comment'
import useInput from '@/hook/input'
import Input from '@/components/Input'
import Button from '@/components/Button'

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
    <div className="w-full">
      <button
        type="button"
        onClick={handleInput}
        className="text-slate-400 text-xs"
      >
        수정
      </button>
      <button
        type="button"
        onClick={() => handleCommDel(`${datum._id}`)}
        className="text-slate-400 text-xs"
      >
        삭제
      </button>
      {active && (
        <div>
          <Input label="댓글 수정" values={commBind} />
          <Button label="확인" style="border" func={handleCommEdit} />
          <Button label="닫기" style="border" func={handleInput} />
        </div>
      )}
    </div>
  )
}
