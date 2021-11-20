import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import { useParams } from "react-router";

const axios = require('axios');

const Characters = () => {
    URL = 'http://127.0.0.1:8000/'
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


    return(
        <div>
            <NavBar/>
            <h1>Characters</h1>
           { playCharacter.map((char) => (
               <div key={char.id}>
                   <h3>{char.name}</h3>
                   <h3>{char.actor}</h3>
                   <h3>{char.notes}</h3>
                   <img src={char.sketches} alt='sketch'/>
                   <img src={char.reference_img} alt='costume inspiration'/>
                   <UpdateForm onDeleteCharacter={deleteCharacter} onUpdateCharacter={updateCharacter} character={char}/>
               </div>
                
            ))}
           
            <AddForm onAddCharacter={addCharacter}/>
        </div>
    )
} 

export default Characters