import {
  useMutation,
  useQueryClient,
  InvalidateQueryFilters,
} from '@tanstack/react-query'
import { deleteBike } from '../apis/apiClient'

function useDeleteBike() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: number) => deleteBike(values),
    onSuccess: () => {
      client.invalidateQueries([
        ['bike'],
        ['bikes'],
        ['host'],
      ] as InvalidateQueryFilters)
    },
  })
}

export default useDeleteBike
