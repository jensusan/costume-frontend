import { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";
import AddForm from "./AddForm";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./Home-styled";
import { Button } from "../../components/Button-styled";
const axios = require('axios');

   
const Home = ({plays}) => {
    URL = 'https://dashboard.heroku.com/apps/protected-brushlands-01164/'
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
    

    const [addVisible, setAddVisible] = useState(false);

    const handleShowAdd = () => {
        setAddVisible(true)
    };

    const handleHideAdd = () => {
        setAddVisible(false)
    };


    return(
        <Wrapper>
            <h1 className='main-title'>All Plays</h1>
            {plays.map((play)=> (
                <div key={play.id} className='play-content'>
                <Link to={`/plays/${play.id}`} style={{textDecoration: 'none'}}><h2 className='title'>{play.title}</h2></Link>
                <Content>
                {/* <h4 className='label'>Author:</h4>
                <h3 className='input'>{play.author}</h3> */}
                {/* <h4 className='label'>Concept:</h4>
                <h3 className='input'>{play.concept}</h3>
                <h4 className='label'>Director Notes:</h4>
                <h3 className='input'>{play.director_notes}</h3> */}
                <h4 className='label'>Reference Image:</h4>
                <Link to={`/plays/${play.id}`} style={{textDecoration: 'none'}}><img className='play-img' src={play.reference_img} alt='reference image'/></Link>
                </Content>
                </div>
            )  
            )}
             
           {addVisible && <AddForm onAddPlay={addPlay} onClose={handleHideAdd} />}
           <Button onClick={handleShowAdd}>Add Play</Button>
        </Wrapper>
    )
}

export default Home;