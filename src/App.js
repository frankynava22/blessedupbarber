import './App.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.js'
import Home from './components/Home.js'
import { useState } from 'react';


const StyledDiv = styled.div`
  background-color: pink;
  height: 100vh;
`

function App() {
const [clicked, setClicked] = useState(false);

  return (
    <StyledDiv>
      <Router>
        <NavBar setClicked = {setClicked}/>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
          <Route path="/appointment" component={Appointment} /> */}
        </Routes>
      </Router>
      {!clicked && <Home/>}     
    </StyledDiv>
  );
}

export default App;
