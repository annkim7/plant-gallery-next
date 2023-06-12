import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { addMember } from '../helpers/regi'

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
