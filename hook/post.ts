import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { deleteItem, getItem, getList } from '@/helpers/fetch'
import { addItem, editItem } from '../helpers/fetch'

export const useGetList = () => {
  return useQuery({
    queryKey: ['list'],
    queryFn: getList,
    staleTime: 10 * 1000,
  })
}

export const useGetItem = (id: string) => {
  return useQuery({
    queryKey: ['item', id],
    queryFn: () => getItem(id),
    staleTime: 10 * 1000,
  })
}

export const useAddItem = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list'])
      router.push('/')
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}

export const useEditItem = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(editItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list'])
      router.push('/')
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}

export const useDeleteItem = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list'])
      router.push('/')
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}
