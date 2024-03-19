import React from "react";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import styled, { keyframes } from 'styled-components';
import Button from 'react-bootstrap/Button';



const StyledDiv = styled.div`
    background-color: black;
    min-height: 100vh; 
    width: 100%;
    margin: 0;
    padding: 0;

    color: white;
`

const StyledContainer = styled(Container)`
    background-color: black;
    width: 100%;
    margin-top: 25px;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

`

const StyledStack = styled(Stack)`
    background-color: black;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    margin: 5px;
    padding: .5px;
`

const StyledUl = styled.ul`
    background-color: black;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

`

const StyledLi = styled.li`
    background-color: #282C35;
    margin: 10px;
    padding-top: 5px;
    width: 425px;
    font-family: 'mouldy-cheese-font';
`

const StyledButton = styled(Button)`
    margin: 10px;
    align-items: center;
    justify-content: center;

`
const WhiteLine = styled.hr`
  border: none; // Remove the default border
  height: 1px; // Height of the line
  background-color: white; // Color of the line
`;

const StyledHeader = styled.h1`
  font-family: 'glitch-goblin-font';
`

const StyledText = styled.h1`
    text-decoration: underline;
    font-size: 20px;
`

// Define the animation
const movingGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Custom hues for black, grey, and white
const hues = {
  white: 'white', // A soft white
  black: '#03C03C'	, // A darker shade of black
  grey:'#77DD77'	, // A muted shade of grey
};

const StyledMoney = styled.p`
  background: linear-gradient(270deg, ${hues.black}, ${hues.grey}, ${hues.white});
  background-size: 200% 200%;
  animation: ${movingGradient} 5s ease infinite;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
`;



function Services(){
    const services = [
        {id:1 , name: "HAIRCUTS", price: 30, time: "30MIN"},
        {id:2 , name: "HAIRCUT + EYEBROWS", price: 35, time: "30MIN"},
        {id:3 , name: "HAIRCUT + BEARD", price: 45, time: "40MIN"},
    ]

    const otherServices = [
        {id:5 , name: "2 HAIRCUTS", price: 60, time: "1HR"},
        {id:6 , name: "[VIP] EMERGENCY 'SUNDAY' CUTS", price: 40, time: "30MIN"},
        {id:7 , name: "HOUSE CALLS (Local & Long Range)", price: 75, time: "1HR"},
        {id:8 , name: "(HAIR DYE) + HAIRCUT (2 Weeks Guaranteed)", price: 150, time: "3HR"},
    ]

    const loopMain = services.map((service) => {
        return (
                <StyledStack>
                    <StyledLi key={service.id}>
                        <StyledText>{service.name}</StyledText>
                        <p>&#128339; {service.time}</p>
                        <StyledMoney>${service.price.toFixed(2)}</StyledMoney>
                    </StyledLi>
                </StyledStack>
        )
    });

    const loopOther = otherServices.map((service) => {
        return(
            <StyledStack>
                <StyledLi key={service.id}>
                    <StyledText>{service.name}</StyledText>
                    <p>&#128339; {service.time}</p>
                    <StyledMoney>${service.price.toFixed(2)}</StyledMoney>
                </StyledLi>
            </StyledStack>
        )
    })

    return(
        <StyledDiv>
            <StyledContainer fluid>
                <StyledUl>
                    <StyledHeader>Main Services</StyledHeader>
                    {loopMain}
                </StyledUl>
            </StyledContainer>

            <WhiteLine />

            <StyledContainer fluid>
                <StyledUl>
                    <StyledHeader>Other Services</StyledHeader>
                    {loopOther}
                </StyledUl>
            </StyledContainer>

            <StyledContainer fluid>
                <a href="https://booksy.com/en-us/143688_chris-blanco-blessedupbarber-studio_barber-shop_36347_los-fresnos" rel="noreferrer" target="_blank">
                    <StyledButton  variant="outline-light">Book An Appointment!</StyledButton>
                </a>
            </StyledContainer>
        </StyledDiv>
    )
}

export default Services;