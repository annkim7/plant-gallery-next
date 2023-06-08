import HydratedList from './HydratedList'

export default async function List() {
  return (
    <div className="grid py-8 px-2.5 grid-cols-4 gap-4 auto-rows-fr">
      {/* @ts-expect-error Server Component */}
      <HydratedList />
    </div>
  )
}
