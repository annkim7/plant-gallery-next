import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { getMember, addMember } from '../helpers/regi'

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
