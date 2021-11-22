import { useState } from "react";
import { Wrapper } from '../../pages/Home/UpdateForm-styled';

const UpdateForm = ({todo, onUpdateTodos, onDeleteTodos, onClose}) => {
    const [updateTodo, setUpdateTodo] = useState(todo)
    
    const handleChange = (event) => {
        console.log(event.target.value)
        setUpdateTodo(prevState => ({
            ...prevState, [event.target.name] : event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onUpdateTodos(updateTodo)
    }
    
    return(
        <Wrapper>
        <form onSubmit={handleSubmit}>
            <input type='text' defaultValue={todo.task} name='task' onChange={handleChange}/>
            <input className='btn' type='submit' value='update'/>
        </form>
        <button className='del-btn' onClick={() => onDeleteTodos(todo.id)}>
            Delete Todo
        </button>
        </Wrapper>
    )
}

export default UpdateForm