import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import { Content, Wrapper } from "./Play-styled";
import { useState } from "react";
import UpdateForm from '../../pages/Home/UpdateForm';
import { Button } from "../Button-styled";
const axios = require('axios');

const Play = (props) => {
    const { id } = useParams();
    let play = [];
    {
        props.plays.map((item) => {
          if (item.id == id) {
            return (play = item);
          }
        });
      }

      function deletePlay(id) {
        axios.delete(`${URL}plays/${id}`).then(response => {
            console.log(response)
            }).catch(error => {
            console.log(error)
            })
    }

    function updatePlay(form) {
        const {title,                   author,               
        reference_img,
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
        <>
          <NavBar/>
          <Wrapper>
            <Content>
              <h3 className='title'>{play.title}</h3>
              <h4 className='label'>Author:</h4>
              <h3 className='input'>{play.author}</h3>
              <h4 className='label'>Concept:</h4>
              <h3 className='input'>{play.concept}</h3>
              <h4 className='label'>Director Notes:</h4>
              <h3 className='input'>{play.director_notes}</h3>
              <h4 className='label'>Reference Image:</h4>
              <img className='play-img' src={play.reference_img} alt='reference image'/>
              {editVisible && <UpdateForm play={play}
                id={play.id}
                onUpdatePlay={updatePlay} onClose={handleHideEdit} onDeleteplay={deletePlay}/>}
                <Button className='edit-btn' onClick={handleShowEdit}>Edit Play</Button>
            </Content>
           
          </Wrapper>
        </>
    )
}

export default Play