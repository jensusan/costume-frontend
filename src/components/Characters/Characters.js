import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import { useParams } from "react-router";
import { Wrapper, Content } from "./Characters-styled";
const axios = require('axios');

const Characters = () => {
    URL = 'https://protected-brushlands-01164.herokuapp.com/'
    const {id} = useParams()
    const [characters, setCharacters] = useState([])

    async function getCharacters(props) {
        try
        {const response = await axios.get(`${URL}characters/`)
        setCharacters(response.data)
        } catch (error) {
        console.log(error)
        };
    };
    
    function addCharacter(addForm) {
        axios.post(`${URL}characters/`, addForm).then(response => {
        console.log(response)
        }).catch(error => {
        console.log(error.response.data)
        })
    }

    function deleteCharacter(id) {
        axios.delete(`${URL}characters/${id}`).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    function updateCharacter(form) {
        const {name, actor, sketches, reference_img, notes, play, play_id,
        id} = form
        axios.put(`${URL}characters/${id}`, {
            name, actor, sketches, reference_img, notes, play, play_id
        }).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    useEffect(() => {
        getCharacters()
    }, [])

    let playCharacter = []
    characters.map((character) => {
        if (character.play_id == id) {
            playCharacter.push(character)
        }
        }
    )
    const [addVisible, setAddVisible] = useState(false);

    const handleShowAdd = () => {
        setAddVisible(true)
    };

    const handleHideAdd = () => {
        setAddVisible(false)
    };

    const [editVisible, setEditVisible] = useState (false);

    const handleShowEdit = () => {
        setEditVisible(true)
    };

    const handleHideEdit = () => {
        setEditVisible(false)
    };

    return(
        <div>
            <NavBar/>
            <Wrapper>
                <h1 className='title'>Characters</h1>
                { playCharacter.map((char) => (
               <Content key={char.id}>
                   <h4 className='label'>Character Name:</h4>
                   <h3 className='input'>{char.name}</h3>
                   <h4 className='label'>Actor:</h4>
                   <h3 className='input'>{char.actor}</h3>
                   <h4 className='label'>Notes:</h4>
                   <h3 className='input'>{char.notes}</h3>
                   <h4 className='label'>Sketches:</h4>
                   <img className='img' src={char.sketches} alt='sketch'/>
                   <h4 className='label'>Reference Images:</h4>
                   <img className='img' src={char.reference_img} alt='costume inspiration'/>
                  {editVisible && <UpdateForm onDeleteCharacter={deleteCharacter} onUpdateCharacter={updateCharacter} character={char}/>}
               </Content>
                
                ))}
                {addVisible && <AddForm onAddCharacter={addCharacter} onClose={handleHideAdd} />}
                <button className='edit-btn' onClick={handleShowEdit}>Edit Character</button>
                <button onClick={handleShowAdd}>Add Character</button>
            </Wrapper>
        </div>
    )
} 

export default Characters