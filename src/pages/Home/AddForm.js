import { useState } from 'react'
import Modal from './Modal';
import { Wrapper } from './AddForm-styled';


const AddForm = ({onAddPlay, onClose}) => {
    const [newPlay, setNewPlay] = useState({title: '',
    author: '',
    reference_img: '',
    concept: '',
    director_notes: ''})

    function handleChange(event) {
        setNewPlay(prevState => ({
            ...prevState, [event.target.name] : event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        onAddPlay(newPlay)
        setNewPlay({title: '',
            author: '',
            reference_img: '',
            concept: '',
            director_notes: ''}
        )
    }
    return(
        <Modal onClose={onClose}>
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={newPlay.title} name='title' placeholder='Title' onChange={handleChange}/>
                    <input type='text' value={newPlay.author} placeholder='Author' name='author' onChange={handleChange}/>
                    <input type='text' value={newPlay.reference_img} name='reference_img' placeholder='Reference Image URL' onChange={handleChange}/>
                    <input type='text' value={newPlay.concept} name='concept' placeholder='Concept' onChange={handleChange}/>
                    <input type='text' value={newPlay.director_notes} name='director_notes' placeholder='Director Notes' onChange={handleChange}/>
                    <input className='btn' type='submit' value='add play'/>  
                </form>
            </Wrapper>
        </Modal>
    )
}

export default AddForm