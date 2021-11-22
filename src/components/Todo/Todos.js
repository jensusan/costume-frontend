import { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import UpdateForm from "./UpdateForm";
import AddForm from "./AddForm";
import { Wrapper, Content } from "./Todos-styled";
import { Button } from "../Button-styled";

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

    const [addVisible, setAddVisible] = useState(false);

    const handleShowAdd = () => {
        setAddVisible(true)
    };

    const handleHideAdd = () => {
        setAddVisible(false)
    };

    const [editVisible, setEditVisible] = useState(false);

    const handleShowEdit = () => {
        setEditVisible(true)
    };

    const handleHideEdit = () => {
        setEditVisible(false)
    };

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
            <Wrapper>
            <h1 className='title'>Todos</h1>
           
          { playTodo.map((pt) => (
              <Content key={pt.id}>
                
                <h4>{pt.task}</h4>
                {editVisible && <UpdateForm todo={pt} onUpdateTodos={updateTodo} onDeleteTodos={deleteTodo}/>}
              </Content>
          ))}
            {addVisible && <AddForm onAddTodo={addTodo} onClose={handleHideAdd} />}
            <Button className='edit-btn' onClick={handleShowEdit}>Edit Task</Button>
           <Button onClick={handleShowAdd}>Add Task</Button>
          
            
            </Wrapper>
        </div>
    )
}

export default Todos