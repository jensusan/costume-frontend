import { useState, useEffect } from "react";
const axios = require('axios');

const Characters = () => {
    URL = 'http://127.0.0.1:8000/'
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
        const {name, actor, sketches, reference_img, notes, play,
        id} = form
        axios.put(`${URL}characters/${id}`, {
            name, actor, sketches, reference_img, notes, play
        }).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return(
        <div>
            <h1>Characters</h1>
        </div>
    )
} 

export default Characters