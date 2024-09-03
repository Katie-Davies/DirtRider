import { useQuery } from '@tanstack/react-query'
import { getBookingById } from '../apis/apiClient'

export function useGetBookingById(id: number) {
  return useQuery({
    queryKey: ['booking', id],
    queryFn: async () => await getBookingById(id),
  })
}
