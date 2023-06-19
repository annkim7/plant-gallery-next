'use client'

import { Session } from 'next-auth'
import { useAddComment, useGetCommentList } from '@/hook/comment'
import useInput from '@/hook/input'
import Input from '@/components/Input'
import Button from '@/components/Button'
import CommItem from './CommItem'

interface CommentProps {
  id: string
  info: Session | null
}

export default function Comment({ id, info }: CommentProps) {
  const [comment, commBind, comReset] = useInput('')
  const { data } = useGetCommentList(id)
  const { mutate } = useAddComment()

  const handleComment = () => {
    mutate({
      _id: id,
      comment,
    })
    comReset()
  }

  return (
    <div>
      <div>
        {data &&
          (data.length > 0
            ? data.map((el) => (
                <div key={`${el._id}`}>
                  <span>
                    {el.content} - {el.name}
                  </span>
                  {info?.user?.email === el.author && <CommItem datum={el} />}
                </div>
              ))
            : '댓글없음')}
      </div>
      {info && (
        <>
          <Input label="댓글 작성" values={commBind} />
          <Button label="전송" type="button" func={handleComment} />
        </>
      )}
    </div>
  )
}
