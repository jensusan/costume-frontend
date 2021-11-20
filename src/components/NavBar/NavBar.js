import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Wrapper, Content } from "./NavBar-styled";


const NavBar = () => {
    const { id } = useParams();
    
    return(
        <Wrapper>
            <Content>
                <Link to='/' style={{textDecoration: 'none'}}>Home </Link>
                <Link to={{pathname: `/plays/${id}`}} style={{textDecoration: 'none'}}>Play</Link>
                <Link to={{pathname: `/plays/${id}/characters`}} style={{textDecoration: 'none'}}>Characters</Link>
                <Link to={{pathname: `/plays/${id}/todos`}} style={{textDecoration: 'none'}}>Todos</Link>
                <Link to={{pathname: `/plays/${id}/trackers`}} style={{textDecoration: 'none'}}>Costume Tracker</Link>
            </Content>
        </Wrapper>
    )
}

export default NavBar