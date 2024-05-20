import { useQuery } from '@tanstack/react-query'
import { getUserById } from '../apis/apiClient'

export default function useGetUserByID(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => await getUserById(id),
  })
}
