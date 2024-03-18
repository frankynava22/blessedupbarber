import React, { useEffect, useState } from "react";
import { Video } from "./HomeComponents/Video";
import { Review } from "./HomeComponents/Review";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';



const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  background-color: black;
`

const StyledSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100vh;
`

export function Home() {
  const [loading, setLoading] = useState(true);

  //simulate loading the home component
  useEffect(() => {
    const timer = setTimeout(() => {
      //for a second, set the variable to false to show spinner
      setLoading(false);
    }, 1000);

    //delete what we just did
    return () => clearTimeout(timer);

    //does not listen to anything else
  }, []);

  if(loading){
    return(
      <StyledSpinnerContainer>
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </StyledSpinnerContainer>
    )
  }

  return (
    <StyledContainer fluid>
      <Video />
      <Review />
    </StyledContainer>
  );
}

export default Home;