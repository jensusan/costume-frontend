import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
const axios = require('axios');

const Todos = () => {
    return(
        <div>
            <NavBar/>
            <h1>Todos</h1>
        </div>
    )
}

export default Todos