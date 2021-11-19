import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
const axios = require('axios');

const Trackers = () => {
    URL = 'http://127.0.0.1:8000/'
    const {id} = useParams()
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
        const {scene, character, change, notes, play_id, id} = form
        axios.put(`${URL}trackers/${id}`, {
            scene, character, change, notes, play_id
        }).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error.response.data)
            })
    }

    useEffect(() => {
        getTrackers()
    }, [])

    let playTrack = []
    trackers.map((track) => {
        if (track.play_id == id) {
            playTrack.push(track)
        }
        }
)

    return(
        <div>
            <NavBar/>
            <h1>Trackers</h1>
             {playTrack.map((pt) => (
                 <div key={pt.id}>
                 <h4>{pt.scene}</h4>
                 <h4>{pt.character}</h4>
                 <h4>{pt.notes}</h4>
                    <UpdateForm tracker={pt} onUpdateTracker={updateTrack}
                    onDeleteTracker={deleteTrack}/>
                 </div>
             ))}
       
       <AddForm onAddTracker={addTrack} />
        </div>
    )
}

export default Trackers