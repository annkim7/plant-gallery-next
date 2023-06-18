import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { editLike, getLike } from '@/helpers/like'

export const useGetLike = (id: string) => {
  return useQuery({
    queryKey: ['like', id],
    queryFn: () => getLike(id),
    staleTime: 10 * 1000,
  })
}

export const useEditLike = () => {
  const queryClient = useQueryClient()

  return useMutation(editLike, {
    onSuccess: () => {
      queryClient.invalidateQueries(['like'])
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}
