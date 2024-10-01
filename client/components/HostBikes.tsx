import { useGetHostsBikes } from '../hooks/useGetHostsBikes'

import SmallBikeCard from './SmallBikeCard'

interface Props {
  user?: string
}

function HostBikes({ user }: Props): JSX.Element {
  const { data: bikes, isLoading, isError } = useGetHostsBikes(user ?? '')

  if (isLoading) {
    return <h1>Your bikes are loading...</h1>
  }
  if (isError) {
    return <h1>There was an error loading your bikes!</h1>
  }

  if (bikes) {
    return (
      <>
        {bikes.map(
          (bike) => (
            <SmallBikeCard key={bike.id} {...bike} />
          ),
          // )
        )}
      </>
    )
  }
  return <h1>You have no bikes</h1>
}

export default HostBikes
