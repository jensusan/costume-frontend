import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";

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
        <div>
                <h3>{play.title}</h3>
                <h4>Author:</h4>
                <h4>{play.author}</h4>
                <h4>Concept:</h4>
                <h4>{play.concept}</h4>
                <h4>Director Notes:</h4>
                <h4>{play.director_notes}</h4>
                <h4>Reference Image:</h4>
                <img className='play-img' src={play.reference_img} alt='reference image'/>
        </div>
        </>
    )
}

export default Play