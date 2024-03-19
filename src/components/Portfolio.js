import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import MoreHair from "./PortfolioComponents/MoreHair";
import MoreDye from "./PortfolioComponents/MoreDye";
import Image from 'react-bootstrap/Image';

//cuts
import Client2 from './PortfolioComponents/cuts/client2.PNG';
import Client3 from './PortfolioComponents/cuts/client3.PNG';
import Client4 from './PortfolioComponents/cuts/client4.PNG';

//Dyes
import DClient1 from './PortfolioComponents/dyed/clientd1One.PNG'
import DClient2 from './PortfolioComponents/dyed/clientd1Three.PNG'
import DClient3 from './PortfolioComponents/dyed/clientd1Two.PNG'



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
  background-color: #0f0f0f;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  //varient of black
  background-color: black;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

function Portfolio(){
  const [showMoreHair, setShowMoreHair] = useState(false);
  const [showMoreDye, setShowMoreDye] = useState(false);

  const clickedMoreHair = () => {
    setShowMoreHair(!showMoreHair)
  }

  const clickedMoreDye = () => {
    setShowMoreDye(!showMoreDye)
  }


    return (
        <ContainerWrapper>
          <Row className="justify-content-center">
              <Col xs={12} lg={6}>
              <TextContainer>
                  <StyledHeader>Portfolio</StyledHeader>
              </TextContainer>
              </Col>
          </Row>

          {/* images start */}
          <Row xs={1} md={3} lg={3} className="g-4">
          <Col>
            <ImageContainer>
              <ImageText><Image src={Client2} fluid/></ImageText>
            </ImageContainer>
          </Col>
          <Col>
            <ImageContainer>
              <ImageText><Image src={Client3} fluid/></ImageText>
            </ImageContainer>
          </Col>

          <Col>
            <ImageContainer>
              <ImageText><Image src={Client4} fluid/></ImageText>
            </ImageContainer>
          </Col>

          {showMoreHair && <MoreHair />}

        </Row>

          {/* Button */}
          <Row className="justify-content-center">
              <Col xs={12} lg={6}>
                <ButtonContainer>
                  <Button  variant="outline-light" onClick={clickedMoreHair}>{!showMoreHair?"Show More Cuts!" : "Show Less"}</Button>
                </ButtonContainer>
              </Col>
          </Row>

          {/*----------------------------------------------------------------------------------*/}
          <Row className="justify-content-center">
              <Col xs={12} lg={6}>
              <TextContainer>
                  <StyledHeader>Special Cuts</StyledHeader>
              </TextContainer>
              </Col>
          </Row>

           {/* dye images start */}
          <Row xs={1} md={3} lg={3} className="g-4">
          <Col>
            <ImageContainer>
              <ImageText><Image src={DClient1} fluid/></ImageText>
            </ImageContainer>
          </Col>
          <Col>
            <ImageContainer>
              <ImageText><Image src={DClient2} fluid/></ImageText>
            </ImageContainer>
          </Col>

          <Col>
            <ImageContainer>
              <ImageText><Image src={DClient3} fluid/></ImageText>
            </ImageContainer>
          </Col>

          {showMoreDye && <MoreDye />}

        </Row>

        <Row className="justify-content-center">
              <Col xs={12} lg={6}>
                <ButtonContainer>
                  <Button  variant="outline-light" onClick={clickedMoreDye}>{!showMoreDye?"Show More Dye Cuts!" : "Show Less"}</Button>
                </ButtonContainer>
              </Col>
          </Row>
        </ContainerWrapper>
      )
    }


export default Portfolio;