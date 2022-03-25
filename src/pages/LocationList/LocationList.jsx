import { getMapLocation } from "../../services/api-calls"
import { useEffect } from 'react'

function LocationList(props) {
  console.log(props.locations)

  useEffect(() => {
		getMapLocation()
	})

  return (
    <>
      <h1>Locations!!</h1>
      <div>
        {props.locations?.map(location => (

          <div key={location._id}>
            <p>Location Name: {location.name}</p>
            <p>Description: {location.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default LocationList