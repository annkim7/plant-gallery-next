import { addComment, editComment, getComment } from '@/helpers/comm'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteComment } from '../helpers/comm'

export const useGetCommentList = (id: string) => {
  return useQuery({
    queryKey: ['comment', id],
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

export const useEditComment = () => {
  const queryClient = useQueryClient()

  return useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment'])
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}

export const useDeleteComment = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment'])
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}
