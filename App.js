import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './../NavBar/NavBar'
import Сharacters from './../Characters/Сharacters'
import Planets from './../Planets/Planets'
import Starships from './../Starships/Starships'


const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Сharacters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/starships" element={<Starships />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
