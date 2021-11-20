import { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import UpdateForm from "./UpdateForm";
import AddForm from "./AddForm";
const axios = require('axios');

const Todos = () => {
    URL = 'http://127.0.0.1:8000/'
    const {id} = useParams()
    const [todos, setTodos] = useState([])

    async function getTodos() {
        try
        {const response = await axios.get(`${URL}todos/`)
        setTodos(response.data)
        } catch (error) {
        console.log(error)
        };
    };
    
    function addTodo(addForm) {
        axios.post(`${URL}todos/`, addForm).then(response => {
        console.log(response)
        }).catch(error => {
        console.log(error.response.data)
        })
    }

    function deleteTodo(id) {
        axios.delete(`${URL}todos/${id}`).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    function updateTodo(form) {
        const {task, completed, play_id, id} = form
        axios.put(`${URL}todos/${id}`, {
            task, completed, play_id
        }).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error.response.data)
            })
    }

    useEffect(() => {
        getTodos()
    }, [])

    let playTodo = []
    todos.map((todo) => {
    if (todo.play_id == id) {
    playTodo.push(todo)
    }
    }
    )

    return(
        <div>
            <NavBar/>
            <h1>Todos</h1>
          { playTodo.map((pt) => (
              <div key={pt.id}>
                <input type='checkbox'/>
                <h4>{pt.task}</h4>
                <UpdateForm todo={pt} onUpdateTodos={updateTodo} onDeleteTodos={deleteTodo}/>
              </div>
          ))}

          <AddForm onAddTodo={addTodo}/>
            

        </div>
    )
}

export default Todos