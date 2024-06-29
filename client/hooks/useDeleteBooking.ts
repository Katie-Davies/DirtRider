import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBooking } from '../apis/apiClient'

function useDeleteBooking() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: number) => deleteBooking(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['renterBookings'] })
    },
  })
}

export default useDeleteBooking
