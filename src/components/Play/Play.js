import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import { Content, Wrapper } from "./Play-styled";
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
    console.log(play)
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
            </Content>
          </Wrapper>
        </>
    )
}

export default Play