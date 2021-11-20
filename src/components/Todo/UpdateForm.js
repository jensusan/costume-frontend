import { useState } from "react";


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
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' defaultValue={todo.task} name='task' onChange={handleChange}/>
            <input type='submit' value='update'/>
        </form>
        <button onClick={() => onDeleteTodos(todo.id)}>
            Delete Todo
        </button>
        </div>
    )
}

export default UpdateForm