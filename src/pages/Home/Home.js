import { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";
import AddForm from "./AddForm";
const axios = require('axios');

   
const Home = () => {
    URL = 'http://127.0.0.1:8000/'
    const [plays, setPlays] = useState([])

    async function getPlays() {
        try
        {const response = await axios.get(`${URL}plays/`)
        setPlays(response.data)
        } catch (error) {
        console.log(error)
        };
    };
    
    function addPlay(addForm) {
        axios.post(`${URL}plays/`, addForm).then(response => {
        console.log(response)
        }).catch(error => {
        console.log(error.response.data)
        })
    }

    function deletePlay(id) {
        axios.delete(`${URL}plays/${id}`).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    function updatePlay(form) {
        const {title,                   author,               reference_img,
        concept,
        director_notes, 
        id} = form
        axios.put(`${URL}plays/${id}`, {
            title, 
            author,
            reference_img,
            concept,
            director_notes
        }).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    useEffect(() => {
        getPlays()
    }, [])

    console.log(plays)
    return(
        <div>
            <h1>Plays</h1>
            {plays.map((play)=> (
                <div key={play.id}>
                <h3>{play.title}</h3>
                <h4>{play.author}</h4>
                <h4>{play.concept}</h4>
                <h4>{play.director_notes}</h4>
                <img src={play.reference_img} alt='reference image'/>
                <button onClick={() => deletePlay(play.id)}>
                    Delete Play
                </button>
                <UpdateForm play={play}
                id={play.id}
                onUpdatePlay={updatePlay}/>
                </div>
            )  
            )}
           <AddForm onAddPlay={addPlay}/>
        </div>
    )
}

export default Home;