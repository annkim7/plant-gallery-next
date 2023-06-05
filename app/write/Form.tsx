'use client'

export default function Form() {
  return (
    <form action="/api/post/new" method="POST">
      <input name="title" placeholder="제목" />
      <input name="content" placeholder="내용" />
      <button type="submit">버튼</button>
    </form>
  )
}
