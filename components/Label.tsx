type Props = {
  label: string
}

export default function Label({ label }: Props) {
  return (
    <h3 className="col-span-full my-3 text-base font-medium text-slate-600 dark:text-slate-100">
      {label}
    </h3>
  )
}
