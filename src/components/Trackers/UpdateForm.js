import { useState } from "react";
import { Wrapper } from '../../pages/Home/UpdateForm-styled';

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
        <Wrapper>
        <form onSubmit={handleSubmit}>
            <input type='text' defaultValue={tracker.scene} name='scene' onChange={handleChange}/>
            <input type='text' defaultValue={tracker.character} name='character' onChange={handleChange}/>
            <input type='text' defaultValue={tracker.change} name='change' onChange={handleChange}/>
            <input type='text' defaultValue={tracker.notes} name='notes' onChange={handleChange}/>
            <input className='btn' type='submit' value='update track' onChange={handleChange}/>
        </form>
        <button className='del-btn' onClick={() => onDeleteTracker(tracker.id)}>Delete Track</button>
        </Wrapper>
    )
}

export default UpdateForm