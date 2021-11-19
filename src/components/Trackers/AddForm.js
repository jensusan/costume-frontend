import { useState } from 'react'
import { useParams } from 'react-router'

const AddForm = ({onAddTracker}) => {
    const {id} = useParams()
    const [newTrack, setNewTrack] = useState({scene: '',
    character: '',
    change: '',
    notes: '',
    play_id: id})

    function handleChange(event) {
        setNewTrack(prevState => ({
            ...prevState, [event.target.name] : event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        onAddTracker(newTrack)
        setNewTrack({scene: '',
        character: '',
        change: '',
        notes: '',
        }
        )
    }
    return(
        <form onSubmit={handleSubmit}>
          <input type='text' value={newTrack.scene} name='scene' placeholder='Scene' onChange={handleChange}/>
            <input type='text' value={newTrack.character} placeholder='Character' name='character' onChange={handleChange}/>
            <input type='text' value={newTrack.change} name='change' placeholder='Change' onChange={handleChange}/>
            <input type='text' value={newTrack.notes} name='notes' placeholder='Notes' onChange={handleChange}/>
            <input type='submit' value='add track'/>  

        </form>
    )
}

export default AddForm