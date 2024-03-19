import './App.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.js'
import Home from './components/Home.js'
import Services from './components/Services.js';
import Portfolio from './components/Portfolio.js';
import { useState } from 'react';


const StyledDiv = styled.div`
  background-color: black;
  min-height: 100vh; 
`

function App() {
const [clicked, setClicked] = useState(false);


  return (
    <StyledDiv>
      <Router>
        <NavBar setClicked = {setClicked}/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/appointment" element={Appointment} /> */}
        </Routes>
      </Router>
    </StyledDiv>
  );
}

export default App;
