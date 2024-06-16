import { useQuery } from '@tanstack/react-query'
import { getHostBikes } from '../apis/apiClient'

export function useGetHostsBikes(user: string) {
  return useQuery({
    queryKey: ['host', user],
    queryFn: async () => await getHostBikes(user),
  })
}
