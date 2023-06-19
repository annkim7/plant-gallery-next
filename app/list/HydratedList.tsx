import { dehydrate } from '@tanstack/query-core'
import getQueryClient from '@/util/getQueryClient'
import HydrateOnClient from '@/util/hydrateOnClient'
import { getList } from '@/helpers/fetch'
import ListItem from './ListItem'

import { Session } from 'next-auth'

interface HyProps {
  info: Session | null
}

export default async function HydratedList({ info }: HyProps) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['list'], getList)
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrateOnClient state={dehydratedState}>
      <ListItem info={info} />
    </HydrateOnClient>
  )
}
