import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../apis/apiClient'
import { Booking } from '../../models/models'

function useUpdateBooking() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: Booking) => updateBooking(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['booking'] })
    },
  })
}

export default useUpdateBooking
