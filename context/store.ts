import { ListData } from '@/helpers/fetch'
import { MemberData } from '@/helpers/regi'
import { atom } from 'recoil'

const dataState = atom<ListData[]>({
  key: 'dataState',
  default: [],
})

const formState = atom<{}>({
  key: 'formState',
  default: { password: true },
})

export { dataState, formState }
