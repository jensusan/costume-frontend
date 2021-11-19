import './App.css';
import { Routes, Route } from "react-router-dom";
import { getPlays, addPlay, deletePlay} from './axios'
import { useState, useEffect } from "react";
import Home from './pages/Home/Home';
import Play from './components/Play/Play';
import Characters from './components/Characters/Characters';
import Trackers from './components/Trackers/Trackers';
import Todos from './components/Todo/Todos';
const axios = require('axios');

function App() {
  URL = 'http://127.0.0.1:8000/'
    const [plays, setPlays] = useState([])

    async function getPlays() {
        try
        {const response = await axios.get(`${URL}plays/`)
        setPlays(response.data)
        } catch (error) {
        console.log(error)
        };
    };

    useEffect(() => {
      getPlays()
    }, [])

  return (
    <Routes>
      <Route path='' element={<Home plays={plays}/>}/>
      <Route path='/plays/:id' element={<Play plays={plays}/>} />
      <Route path='/plays/:id/characters/' element={<Characters/>}/>
      <Route path='/plays/:id/trackers/' element={<Trackers/>}/>
      <Route path='/plays/:id/todos/' element={<Todos/>}/>
    </Routes>
  );
}

export default App;
