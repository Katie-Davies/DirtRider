import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addBike } from '../apis/apiClient'
import { Bikes } from '../../models/models'

// export default function useAddBike() {
//   const client = useQueryClient()
//   return useMutation(addBike, {
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ['bikes', 'host'] })
//     },
//   })
// }

const useAddBike = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, { data: any; token: string }>({
    // Adjust types as per your actual data structure
    mutationFn: ({ data, token }) => addBike({ data, token }), // Arrow function to call addBike with parameters

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bikes'] }),
        queryClient.invalidateQueries({ queryKey: ['host'] })
    },
  })
}

export default useAddBike
