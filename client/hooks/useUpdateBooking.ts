import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../apis/apiClient'
import { UpdateBooking } from '../../models/models'

function useUpdateBooking() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: UpdateBooking) => updateBooking(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['booking'] })
    },
  })
}

export default useUpdateBooking
