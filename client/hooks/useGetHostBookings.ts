import { useQuery } from '@tanstack/react-query'
import { getBookingByHostId } from '../apis/apiClient'

export function useGetHostBookings(id: string) {
  return useQuery({
    queryKey: ['hostBookings'],
    queryFn: async () => await getBookingByHostId(id),
  })
}
