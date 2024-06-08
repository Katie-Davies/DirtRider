import { useMutation, useQueryClient } from '@tanstack/react-query'

import { User } from '../../models/models'
import { updateUser } from '../apis/apiClient'

export default function useUpdateUser() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: User) => updateUser(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['user'] })
    },
  })
}
