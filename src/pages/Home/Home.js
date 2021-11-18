import { useState, useEffect } from "react";
import DeletePlay from "./DeletePlay";
const axios = require('axios');


   
const Home = () => {
    URL = 'http://127.0.0.1:8000/'
    const [plays, setPlays] = useState(null)

    async function getPlays() {
        try
        {const response = await axios.get(`${URL}plays/`)
        setPlays(response.data)
        } catch (error) {
        console.log(error)
        };
    };
    
    function addPlay() {
        axios.post(`${URL}plays/`, {
            title: 'The Skriker',
            author: 'Carol Churchill',
            reference_img: 'https://wallpaperaccess.com/full/4845847.jpg',
            concept: 'dark, moody, fairy tale',
            director_notes: 'muted colors'
        }).then(response => {
        console.log(response)
        }).catch(error => {
        console.log(error)
        })
    }

    function deletePlay(id) {
        axios.delete(`${URL}plays/${id}`).then(response => {
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
                <div>
                <h3>{play.title}</h3>
                <h4>{play.author}</h4>
                <h4>{play.concept}</h4>
                <h4>{play.director_notes}</h4>
                <img src={play.reference_img} alt='reference image'/>
                <button onClick={() => deletePlay(play.id)}>
                    Delete Play
                </button>
                </div>
            )  
            )}
           
        </div>
    )
}

export default Home;