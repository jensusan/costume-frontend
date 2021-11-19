import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <header>
            <Link to='characters/:id'>Characters</Link>
            <Link to='trackers/:id'>Costume Tracker</Link>
            <Link to='todos/:id'>To Do List</Link>
        </header>
    )
}

export default NavBar