import HydratedList from './HydratedList'

export default async function List() {
  return (
    <div className="border border-indigo-600">
      {/* @ts-expect-error Server Component */}
      <HydratedList />
    </div>
  )
}
