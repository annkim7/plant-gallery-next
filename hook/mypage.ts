import { useQuery } from '@tanstack/react-query'
import { getMemberComm, getMemberPost, getMemberLike } from '@/helpers/myList'

export const useGetMyPost = (author: string | undefined | null) => {
  return useQuery({
    queryKey: ['myPost', author],
    queryFn: () => getMemberPost(author),
    staleTime: 10 * 1000,
  })
}

export const useGetMyComm = (author: string | undefined | null) => {
  return useQuery({
    queryKey: ['myComment', author],
    queryFn: () => getMemberComm(author),
    staleTime: 10 * 1000,
  })
}

export const useGetMyLike = (author: string | undefined | null) => {
  return useQuery({
    queryKey: ['myLike', author],
    queryFn: () => getMemberLike(author),
    staleTime: 10 * 1000,
  })
}
