import { useState } from 'react'
import { useParams } from 'react-router'

const AddForm = ({onAddTodo}) => {
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
        <form onSubmit={handleSubmit}>
            <input type='text' value={newTodo.task} name='task' placeholder='New Task' onChange={handleChange}/>
            <input type='submit' value='add task'/>  

        </form>
    )
}

export default AddForm