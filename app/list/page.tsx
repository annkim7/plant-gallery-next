import HydratedList from './HydratedList'

export default async function List() {
  return (
    <div className="grid py-8 px-2.5 gap-4 grid-cols-masonry auto-rows-[0.5rem]">
      {/* @ts-expect-error Server Component */}
      <HydratedList />
    </div>
  )
}
