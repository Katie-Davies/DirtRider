import { useQuery } from '@tanstack/react-query'
import { getBikeById } from '../apis/apiClient'

export default function useGetBikeByID(id: string) {
  return useQuery({
    queryKey: ['bike', id],
    queryFn: async () => await getBikeById(id),
  })
}
