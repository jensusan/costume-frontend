import { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";
import AddForm from "./AddForm";
import { Link } from "react-router-dom";
const axios = require('axios');

   
const Home = ({plays}) => {
    URL = 'http://127.0.0.1:8000/'
    // const [plays, setPlays] = useState([])

    // async function getPlays() {
    //     try
    //     {const response = await axios.get(`${URL}plays/`)
    //     setPlays(response.data)
    //     } catch (error) {
    //     console.log(error)
    //     };
    // };
    
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

    

    const [editVisible, setEditVisible] = useState(false);

    const handleShowEdit = () => {
        setEditVisible(true)
    };

    const handleHideEdit = () => {
        setEditVisible(false)
    };

    return(
        <div>
            <h1>Plays</h1>
            {plays.map((play)=> (
                <div key={play.id} className='play-content'>
                <Link to={`/plays/${play.id}`}><h3>{play.title}</h3></Link>
                <h4>Author:</h4>
                <h4>{play.author}</h4>
                <h4>Concept:</h4>
                <h4>{play.concept}</h4>
                <h4>Director Notes:</h4>
                <h4>{play.director_notes}</h4>
                <h4>Reference Image:</h4>
                <img className='play-img' src={play.reference_img} alt='reference image'/>
                
                {editVisible && <UpdateForm play={play}
                id={play.id}
                onUpdatePlay={updatePlay} onClose={handleHideEdit} onDeleteplay={deletePlay}/>}
                </div>
            )  
            )}
              <button className='edit-btn' onClick={handleShowEdit}>Edit</button>
           <AddForm onAddPlay={addPlay}/>
        </div>
    )
}

export default Home;