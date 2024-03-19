import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import styled, { keyframes } from 'styled-components';
import Map from './AboutComponents/Map.js';
import Artist from './AboutComponents/chris.PNG';
import Logo from './AboutComponents/logo.jpg';
import LeftImage from './AboutComponents/logo2.jpg';
import RightImage from './AboutComponents/logo3.png';
import Image from 'react-bootstrap/Image';

const ContainerWrapper = styled.div`
  margin-top: 10px;
  background-color: black;
  color: white;
  padding: 20px;
`;

const ImageContainer = styled.div`
  background-color: #0f0f0f;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

const ImageText = styled.p`
  margin: 0;
`;

const StyledHeader = styled.h1`
  font-family: 'glitch-goblin-font';
`

const TextContainer = styled.div`
  //varient of black
  background-color: #0f0f0f;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
`;

const StyledUl = styled.ul`
  background-color: #0f0f0f;
  margin: 0;
  padding: 0;
`

const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  //more grey color
  background-color: #282C35;
  margin-bottom: 5px;
  margin-top: 10px;
  padding-top: 5px;

  text-align: center;
  align-items: center;
  justify-content: center;

`

const StyledP = styled.p`
  font-family: 'mouldy-cheese-font';
`

const StyledStar = styled.p`
  color: gold;
`

// Define the animation
const movingGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Custom hues for black, grey, and white
const hues = {
  black: 'red', // A darker shade of black
  grey: 'white', // A muted shade of grey
  white: 'red' // A soft white
};

const StyledSpan = styled.span`
  background: linear-gradient(270deg, ${hues.black}, ${hues.grey}, ${hues.white});
  background-size: 200% 200%;
  animation: ${movingGradient} 5s ease infinite;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
`;


export function About() {
  const facts = [
    {id: 1, fact: "Chris is a 15x award winning barber!"},
    {id: 2, fact: "We love quality, and focus on the art side of things!"},
    {id: 3, fact: "Our main focus is to bring your dream hairstyle to reality!"},
    {id: 4, fact: "We accept walk-ins and appointments!"},
    {id: 5, fact: "We accept walk-ins and appointments!"},
    {id: 6, fact: "4.8 Stars on Google Reviews!"},
    {id: 7, fact: "4.5 Stars on Facebook!"},
    {id: 8, fact: "5 Stars on Booksy!"},
    {id: 9, fact: "We are award winning barber studio ready!"},
  ]

  const individualFact = facts.map((fact) => {
    return(
      <div>
        <StyledLi key={fact.id}>
            <Stack direction="horizontal" gap={2}>
              <StyledStar>&#9733;</StyledStar>
              <StyledP>{fact.fact}</StyledP>
            </Stack>
        </StyledLi>
      </div>
    )
  })

    return (
      <ContainerWrapper>
        {/* Using Row and Col from React Bootstrap for layout */}
        <Row xs={1} md={3} lg={3} className="g-4">
          {/* Each image text is wrapped inside a Col component */}
          <Col>
            <ImageContainer>
              <ImageText>
                <Image src={LeftImage} fluid/>
              </ImageText>
            </ImageContainer>
          </Col>
          <Col>
            <ImageContainer>
              <ImageText><Image src={Logo} fluid/></ImageText>
            </ImageContainer>
          </Col>
          <Col>
            <ImageContainer>
              <ImageText><Image src={RightImage} fluid/></ImageText>
            </ImageContainer>
          </Col>
        </Row>

        {/* Section for Artist and Facts */}
        <Row className="justify-content-center">
            <Col xs={12} lg={6}>
            <TextContainer>
                <StyledHeader>The Artist <StyledSpan>(aka Chris Blanco)</StyledSpan></StyledHeader>
                <ImageText><Image src={Artist} fluid/></ImageText>
            </TextContainer>
            </Col>
            <Col xs={12} lg={6}>
            <TextContainer>
                <StyledHeader>Facts</StyledHeader>
                <StyledUl>
                  {individualFact}
                </StyledUl>
            </TextContainer>
            </Col>
        </Row>

        <Stack>
                <TextContainer>
                    <StyledHeader>Where Are We</StyledHeader>
                    <ImageContainer>
                      <Map />
                    </ImageContainer>
                </TextContainer>
        </Stack>

      </ContainerWrapper>
    );
  }

export default About;