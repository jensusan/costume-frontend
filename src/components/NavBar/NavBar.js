import { Link } from "react-router-dom";
import { useParams } from "react-router";


const NavBar = () => {
    const { id } = useParams();
    
    return(
        <header>
            <Link to='/'>Home</Link>
            <Link to={{pathname: `/plays/${id}`}}>Play</Link>
            <Link to={{pathname: `/plays/${id}/characters`}}>Characters</Link>
            <Link to={{pathname: `/plays/${id}/todos`}}>Todos</Link>
            <Link to={{pathname: `/plays/${id}/trackers`}}>Costume Tracker</Link>
        </header>
    )
}

export default NavBar