import MemForm from './MemForm'

export default function Register() {
  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg dark:border-neutral-600">
        <h3 className="my-6 text-xl font-semibold text-slate-700 tracking-wide text-center">
          회원가입
        </h3>
        <MemForm />
      </div>
    </article>
  )
}
