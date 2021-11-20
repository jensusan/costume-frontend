import { useState } from 'react'
import { useParams } from 'react-router'

const AddForm = ({onAddCharacter}) => {
    const {id} = useParams()
    const [newCharacter, setNewCharacter] = useState({name: '',
    actor: '',
    sketches: '',
    reference_img: '',
    notes: '',
    play_id: id})

    function handleChange(event) {
        setNewCharacter(prevState => ({
            ...prevState, [event.target.name] : event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        onAddCharacter(newCharacter)
        setNewCharacter({name: '',
        actor: '',
        sketches: '',
        reference_img: '',
        notes: '',
        play_id: id
        }
        )
    }
    return(
        <form onSubmit={handleSubmit}>
          <input type='text' value={newCharacter.name} name='name' placeholder='name' onChange={handleChange}/>
            <input type='text' value={newCharacter.actor} placeholder='actor' name='actor' onChange={handleChange}/>
            <input type='text' value={newCharacter.sketches} name='sketches' placeholder='sketches' onChange={handleChange}/>
            <input type='text' value={newCharacter.reference_img} name='reference_img' placeholder='reference images' onChange={handleChange}/>
            <input type='text' value={newCharacter.notes} name='notes' placeholder='Notes' onChange={handleChange}/>
            <input type='submit' value='add character'/>  

        </form>
    )
}

export default AddForm