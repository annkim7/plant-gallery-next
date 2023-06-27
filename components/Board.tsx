import Link from 'next/link'

interface BoardProps {
  src: string
  title: string
}

export default function Board({ src, title }: BoardProps) {
  return (
    <div className="border-dashed border-b-2 border-zinc-200 dark:border-neutral-600">
      <Link
        href={src}
        className="block py-1 text-sm text-slate-500 leading-normal"
      >
        {title}
      </Link>
    </div>
  )
}
