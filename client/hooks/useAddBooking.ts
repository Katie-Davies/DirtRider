import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addBooking } from '../apis/apiClient'
import { Booking } from '../../models/models'

export default function useAddBooking() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: Booking) => addBooking(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['renterBooking', 'hostBooking'] })
    },
  })
}
