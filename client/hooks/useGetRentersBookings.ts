import { useQuery } from '@tanstack/react-query'
import { getBookingByRenterId } from '../apis/apiClient'

export function useGetRentersBookings(renterId: string) {
  return useQuery({
    queryKey: ['renterBookings', renterId],
    queryFn: async () => await getBookingByRenterId(renterId),
  })
}
