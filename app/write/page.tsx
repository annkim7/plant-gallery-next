import Form from './Form'

export default function Wrtie() {
  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg">
        <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
          작성하기
        </h3>
        <Form />
      </div>
    </article>
  )
}
