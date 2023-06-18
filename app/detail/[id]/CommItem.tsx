import { CommentData } from '@/helpers/comm'
import { useEditComment, useDeleteComment } from '@/hook/comment'
import Input from '@/components/Input'
import useInput from '@/hook/input'

interface CommItemProps {
  datum: CommentData
}

export default function CommItem({ datum }: CommItemProps) {
  const [comment, commBind] = useInput(datum.content)
  const { mutate: editMutate } = useEditComment()
  const { mutate: deleteMutate } = useDeleteComment()

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
      <Input label="댓글 수정" values={commBind} />
      <button type="button" onClick={handleCommEdit}>
        수정
      </button>
      <button type="button" onClick={() => handleCommDel(`${datum._id}`)}>
        삭제
      </button>
    </div>
  )
}
