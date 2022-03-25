
function LocationList(props) {
  console.log(props.locations)

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