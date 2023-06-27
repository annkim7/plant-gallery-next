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
      <h3 className="my-3 text-base font-medium text-slate-600">댓글</h3>
      <div className="text-sm text-slate-500">
        {data &&
          (data.length > 0
            ? data.map((el) => (
                <ul key={`${el._id}`} className="flex items-center flex-wrap">
                  <li className="leading-normal">
                    <span className="text-sm text-slate-600">{el.content}</span>
                    <em className="px-1 not-italic text-xs text-blue-500">
                      - {el.name}
                    </em>
                  </li>
                  {info?.user?.email === el.author && <CommItem datum={el} />}
                </ul>
              ))
            : '댓글이 없습니다')}
      </div>
      {info && (
        <div className="grid w-full mb-3 grid-cols-6 rounded">
          <Input label="댓글 작성" values={commBind} style="with-button" />
          <Button label="전송" func={handleComment} style="half-round" />
        </div>
      )}
    </div>
  )
}
