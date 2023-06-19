import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getMember, addMember, editMember, deleteMember } from '../helpers/regi'
import { useRouter } from 'next/navigation'

export const useGetMember = (email: string) => {
  return useQuery({
    queryKey: ['member', email],
    queryFn: () => getMember(email),
    staleTime: 10 * 1000,
  })
}

export const useAddMember = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(addMember, {
    onSuccess: () => {
      queryClient.invalidateQueries(['member'])
      router.push('/')
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}

export const useEditMember = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(editMember, {
    onSuccess: () => {
      queryClient.invalidateQueries(['member'])
      router.push('/')
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}

export const useDeleteMember = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(deleteMember, {
    onSuccess: () => {
      queryClient.invalidateQueries(['member'])
      router.push('/')
    },
    onError: ({ message }) => {
      console.log(message)
    },
  })
}
