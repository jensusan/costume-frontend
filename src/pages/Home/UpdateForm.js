import { useState } from "react";


const UpdateForm = ({play, onUpdatePlay, onDeletePlay, onClose}) => {
    const [updatePlay, setUpdatePlay] = useState(play)

    const handleChange = (event) => {
        setUpdatePlay({...updatePlay, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onUpdatePlay(updatePlay)
    }
    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' defaultValue={play.title} name='title' onChange={handleChange}/>
            <input type='text' defaultValue={play.author} name='author' onChange={handleChange}/>
            <input type='text' defaultValue={play.reference_img} name='reference_img' onChange={handleChange}/>
            <input type='text' defaultValue={play.concept} name='concept' onChange={handleChange}/>
            <input type='text' defaultValue={play.director_notes} name='director_notes' onChange={handleChange}/>
            <input type='submit' value='update play'/>
        </form>
        <button onClick={() => onDeletePlay(play.id)}>
            Delete Play
        </button>
        </div>
    )
}

export default UpdateForm