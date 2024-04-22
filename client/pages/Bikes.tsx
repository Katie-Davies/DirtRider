import { getAllBikes } from '../apis/apiClient'

function Bikes() {
  console.log(getAllBikes())
  return <h1>Bikes</h1>
}

export default Bikes
