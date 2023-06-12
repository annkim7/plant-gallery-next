import { addComment, getComment } from '@/helpers/comm'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export const useGetCommentList = (id: string) => {
  return useQuery({
    queryKey: ['comment'],
    queryFn: () => getComment(id),
    staleTime: 10 * 1000,
  })
}

export const useAddComment = () => {
  const queryClient = useQueryClient()

  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment'])
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}
