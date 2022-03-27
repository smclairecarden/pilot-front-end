
import { useState, useRef, useEffect } from "react"
import { getLocation } from '../../services/locations'

function AddLocation(props) {
  const formElement = useRef()
	const [locationData, setLocationData] = useState([])
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		name: '',
		description: '',
		entryPoints: '',
		rating: '',
		// comments: '',
		pictures: '',
	})

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])


  const handleChange = evt => {
  setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		getLocation(formData.name)
		.then(locationData => {
			setLocationData(locationData)
		}, [])
    props.handleAddLocation(formData)
		
  }

	return (
		<>
			<h1>Add Location</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Location Name
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						required
            value={formData.name}
            onChange={handleChange}
					/>
				</div><br />
				<div className="form-group mb-3">
					<label htmlFor="description-input" className="form-label">
						Location Description
					</label>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
            value={formData.description}
            onChange={handleChange}
					/>
				</div><br />
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Entry Points
					</label>
					<input 
						type="text"
						className="form-control"
						id="entry-input"
						name="entryPoints"
            value={formData.entryPoints}
            onChange={handleChange}
					/>
				</div><br />
				<div className="form-group mb-3">
					<label htmlFor="rating-input" className="form-label">
						Rating
					</label>
					<input 
						type="Number"
						className="form-control"
						id="rating-input"
						name="rating"
						required
            value={formData.rating}
            onChange={handleChange}
					/>

				</div>
				{/* <div className="form-group mb-3">

					<label htmlFor="comment-input" className="form-label">
						Comments
					</label>
					<input 
						type="text"
						className="form-control"
						id="comment-input"
						name="comments"
            value={formData.comments}
            onChange={handleChange}
					/> */}
				{/* </div> */}
				<div className="form-group mb-3">
					<label htmlFor="pictures-input" className="form-label">
						Pictures
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="pictures"
            value={formData.pictures}
            onChange={handleChange}
					/>
				</div><br />
        <button
						type="submit"
						className="btn btn-primary btn-fluid"
						disabled={!validForm}
					>
						Add Swim Location
					</button>
			</form>
		</>
	)


}

export default AddLocation