import React from 'react'

interface Props {
  user?: string
}

function HostBikes({ user }: Props): JSX.Element {
  return <h1>My Bikes {user} </h1>
}

export default HostBikes
