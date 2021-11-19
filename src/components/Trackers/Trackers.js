import { useState, useEffect } from "react";
const axios = require('axios');
const Trackers = () => {
    URL = 'http://127.0.0.1:8000/'
    const [trackers, setTrackers] = useState([])

    async function getTrackers() {
        try
        {const response = await axios.get(`${URL}trackers/`)
        setTrackers(response.data)
        } catch (error) {
        console.log(error)
        };
    };
    
    function addTrack(addForm) {
        axios.post(`${URL}trackers/`, addForm).then(response => {
        console.log(response)
        }).catch(error => {
        console.log(error.response.data)
        })
    }

    function deleteTrack(id) {
        axios.delete(`${URL}trackers/${id}`).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    function updateTrack(form) {
        const {scene, character, change, notes, play, id} = form
        axios.put(`${URL}trackers/${id}`, {
            scene, character, change, notes, play
        }).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    useEffect(() => {
        getTrackers()
    }, [])
    console.log(trackers)
    return(
        <div>
            <h1>Trackers</h1>
        </div>
    )
}

export default Trackers