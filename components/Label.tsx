type Props = {
  label: string
}

export default function Label({ label }: Props) {
  return <h3 className="my-3 text-base font-medium text-slate-600">{label}</h3>
}
