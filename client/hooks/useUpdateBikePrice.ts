import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBike } from '../apis/apiClient'
import { BikeId } from '../../models/models'

function useUpdateBikePrice() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: BikeId) => updateBike(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['host'] })
    },
  })
}

export default useUpdateBikePrice
