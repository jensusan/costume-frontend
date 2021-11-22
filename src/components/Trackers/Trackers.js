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
                    {playTrack.map((pt) => (
                   <div>
                   <h3 className='label'>Scene</h3>
                        <p className='input'>{pt.scene}</p>
                        <h3 className='label'>Character</h3>
                        <p className='input'>{pt.character}</p>
                        <h3 className='label'>Notes</h3>
                        <p className='input'>{pt.notes}</p>
                        {editVisible &&<UpdateForm tracker={pt} onUpdateTracker={updateTrack} onDeleteTracker={deleteTrack}/>}
           {addVisible && <AddForm onAddTracker={addTrack} onClose={handleHideAdd} />}
                        </div>
             ))}
       
       
           <button onClick={handleShowAdd}>Add Track</button>
           <button className='edit-btn' onClick={handleShowEdit}>Edit Track</button>
        
        </Content>
       </Wrapper>
    </div>
    )
}

export default Trackers