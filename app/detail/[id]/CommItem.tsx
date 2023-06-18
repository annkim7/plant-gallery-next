import { useState } from 'react'
import { CommentData } from '@/helpers/comm'
import { useEditComment, useDeleteComment } from '@/hook/comment'
import useInput from '@/hook/input'
import Input from '@/components/Input'

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
    <div>
      <button type="button" onClick={handleInput}>
        수정
      </button>
      <button type="button" onClick={() => handleCommDel(`${datum._id}`)}>
        삭제
      </button>
      {active && (
        <div>
          <Input label="댓글 수정" values={commBind} />
          <button type="button" onClick={handleCommEdit}>
            확인
          </button>
          <button type="button" onClick={handleInput}>
            닫기
          </button>
        </div>
      )}
    </div>
  )
}
