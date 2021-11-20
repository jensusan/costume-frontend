import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import { Wrapper, Content } from "./Trackers-styled";
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
            <Wrapper>
            <h1 className='title'>Costume Tracker</h1>
            <Content>
            <table>
            < tr>
            <th className='label'>Scene</th>
            <th className='label'>Character</th>
            <th className='label'>Notes</th>
               </tr>
                    {playTrack.map((pt) => (
                   
                        <tr>
                        <td className='input'>{pt.scene}</td>
                        <td className='input'>{pt.character}</td>
                        <td className='input'>{pt.notes}</td>
                        <td>
                        <UpdateForm tracker={pt} onUpdateTracker={updateTrack} onDeleteTracker={deleteTrack}/>
                        </td>
                        </tr>
             ))}
        </table>
        <AddForm onAddTracker={addTrack} />
        </Content>
       </Wrapper>
    </div>
    )
}

export default Trackers