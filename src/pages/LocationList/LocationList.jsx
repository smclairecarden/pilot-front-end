import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getLocation } from '../../services/locations'
import styles from './LocationList.module.css'

function LocationList(props) {
const [binaryImage, setBinaryImage] = useState('')

    useEffect(() => {
    return getLocation('Lake Michigan')
    .then(res => {
      const binary = btoa(String.fromCharCode(...new Uint8Array(res)))
    console.log(binary)
    setBinaryImage(binary)
    })
}, [])



  return (
    <>
    <h2 className={styles.profileTitle}>Find a new swim spot!</h2>
    <body className={styles.container}>
      {props.locations.length?
      <>
      
        <div className="card-group">
          {props.locations.map((location) => (
              <Link 
                key={location._id}
                to="/location-page"
                state={{ location }}
              >
              <div className="card" style={{ width: '18rem', height: '18rem' }}>
                {location.pictures?
                <>
                  <img className="card-img-top" src={location.pictures} alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.description}</p>
                  </div>
                </>
                :
                <>
                  <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.description}</p>
                    <img src={`data:image/jpeg;base64,${binaryImage}`} />
                  
                  </div>
                </>
                }     
              </div>
            </Link>
          ))}
           <a className="btn btn-primary m-3" href="/add-location">Add a swim spot</a>
        </div>
      </>
      :
      <>
        <h5>Loading swim spots... </h5> 
      </>
      }
    </body>
    </>
  )
}

export default LocationList