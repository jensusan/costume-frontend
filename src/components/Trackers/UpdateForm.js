import { useState } from "react";


const UpdateForm = ({tracker, onUpdateTracker, onDeleteTracker, onClose}) => {
    const [updateTrack, setUpdateTrack] = useState(tracker)

    const handleChange = (event) => {
        setUpdateTrack(prevState => ({
            ...prevState, [event.target.name] : event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onUpdateTracker(updateTrack)
    }
    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' defaultValue={tracker.scene} name='scene' onChange={handleChange}/>
            <input type='text' defaultValue={tracker.character} name='character' onChange={handleChange}/>
            <input type='text' defaultValue={tracker.change} name='change' onChange={handleChange}/>
            <input type='text' defaultValue={tracker.notes} name='notes' onChange={handleChange}/>
            <input type='submit' value='update track' onChange={handleChange}/>
        </form>
        <button onClick={() => onDeleteTracker(tracker.id)}>
            Delete Track
        </button>
        </div>
    )
}

export default UpdateForm