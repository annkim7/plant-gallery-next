import { ListData } from '@/helpers/fetch'
import { atom } from 'recoil'

const dataState = atom<ListData[]>({
  key: 'dataState',
  default: [],
})

export { dataState }
