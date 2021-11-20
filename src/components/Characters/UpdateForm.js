import { useState } from "react";


const UpdateForm = ({character, onUpdateCharacter, onDeleteCharacter, onClose}) => {
    const [updateCharacter, setUpdateCharacter] = useState(character)

    const handleChange = (event) => {
        setUpdateCharacter(prevState => ({
            ...prevState, [event.target.name] : event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onUpdateCharacter(updateCharacter)
    }
    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' defaultValue={character.name} name='name' onChange={handleChange}/>
            <input type='text' defaultValue={character.actor} name='actor' onChange={handleChange}/>
            <input type='text' defaultValue={character.sketches} name='sketches' onChange={handleChange}/>
            <input type='text' defaultValue={character.reference_img} name='reference_img' onChange={handleChange}/>
            <input type='text' defaultValue={character.notes} name='notes' onChange={handleChange}/>
            <input type='submit' value='update character' onChange={handleChange}/>
        </form>
        <button onClick={() => onDeleteCharacter(character.id)}>
            Delete Character
        </button>
        </div>
    )
}

export default UpdateForm