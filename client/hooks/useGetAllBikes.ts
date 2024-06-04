import { useQuery } from '@tanstack/react-query'
import { getAllBikes } from '../apis/apiClient'

export default function useGetAllBikes() {
  return useQuery({
    queryKey: ['bikes'],
    queryFn: async () => await getAllBikes(),
  })
}
