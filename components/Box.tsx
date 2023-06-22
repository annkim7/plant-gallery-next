import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  label: string
}

export default function Box({ children, label }: Props) {
  return (
    <article className="py-8 px-2.5">
      <div className="max-w-lg mx-auto px-5 py-3 border border-zinc-200 rounded-lg dark:border-neutral-600 dark:text-neutral-200">
        <h3 className="py-6 text-xl font-semibold text-slate-700 tracking-wide text-center border-b-2 border-zinc-200 dark:border-neutral-600">
          {label}
        </h3>
        {children}
      </div>
    </article>
  )
}
