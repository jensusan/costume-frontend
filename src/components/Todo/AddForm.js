import { useState } from 'react'
import { useParams } from 'react-router'
import Modal from '../../pages/Home/Modal'
import { Wrapper } from '../../pages/Home/Home-styled'

const AddForm = ({onAddTodo, onClose}) => {
    const {id} = useParams()
    const [newTodo, setNewTodo] = useState({task: '',
    completed: false,
    play_id: id})

    function handleChange(event) {
        setNewTodo(prevState => ({
            ...prevState, [event.target.name] : event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        onAddTodo(newTodo)
        setNewTodo({task: '',
        }
        )
    }
    return(
        <Modal onClose={onClose}>
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={newTodo.task} name='task' placeholder='New Task' onChange={handleChange}/>
                    <input type='submit' value='ADD TASK'/>  

                </form>
            </Wrapper>
        </Modal>
    )
}

export default AddForm