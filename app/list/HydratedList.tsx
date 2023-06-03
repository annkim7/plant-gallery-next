import { dehydrate } from '@tanstack/query-core'
import getQueryClient from '@/util/getQueryClient'
import HydrateOnClient from '@/util/hydrateOnClient'
import { getList } from './fetch'
import ListItem from './ListItem'

export default async function HydratedList() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['list'], getList)
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrateOnClient state={dehydratedState}>
      <ListItem />
    </HydrateOnClient>
  )
}
