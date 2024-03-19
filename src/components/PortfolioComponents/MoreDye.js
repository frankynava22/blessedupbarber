import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';


//dye
import clientOne from './dyed/clientdOne.PNG'
import clientTwo from './dyed/clientdTwo.PNG'
import clientThree from './dyed/clientdThree.PNG'
import clientFour from './dyed/clientdfour.PNG'

import dye1 from './dyed/dye1.PNG'
import dye2 from './dyed/dye2.PNG'
import dye3 from './dyed/dye3.PNG'
import dye4 from './dyed/dye4.jpg'

const ImageContainer = styled.div`
  background-color: #0f0f0f;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

const ImageText = styled.p`
  margin: 0;
`;

const ContainerWrapper = styled.div`
  margin-top: 10px;
  background-color: black;
  color: white;
  padding: 20px;
`;

const TextContainer = styled.div`
  background-color: #0f0f0f;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

const StyledHeader = styled.h1`
  font-family: 'glitch-goblin-font';
`



function MoreDye(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000)

        return () => clearTimeout(timer);
    },[])

    if(loading){
        return(
            <ContainerWrapper>
                <Row className="justify-content-center">
                    <Col xs={12} lg={6}>
                    <TextContainer>
                        <StyledHeader>Loading!</StyledHeader>
                        <Spinner animation="grow" variant="light" />
                        <Spinner animation="grow" variant="dark" />
                    </TextContainer>
                    </Col>
                </Row>
            </ContainerWrapper>

        )
    }

    return(
        <>
        <Col>
          <ImageContainer>
            <ImageText>
              <Image src={clientOne} fluid/>
            </ImageText>
          </ImageContainer>
       </Col>
  
        <Col>
          <ImageContainer>
            <ImageText><Image src={clientTwo} fluid/></ImageText>
          </ImageContainer>
        </Col>

        <Col>
          <ImageContainer>
            <ImageText><Image src={clientThree} fluid/></ImageText>
          </ImageContainer>
        </Col>
        <Col>
          <ImageContainer>
            <ImageText><Image src={clientFour} fluid/></ImageText>
          </ImageContainer>
        </Col>
        <Col>
          <ImageContainer>
            <ImageText><Image src={dye1} fluid/></ImageText>
          </ImageContainer>
        </Col>
        <Col>
          <ImageContainer>
            <ImageText><Image src={dye2} fluid/></ImageText>
          </ImageContainer>
        </Col>
        <Col>
          <ImageContainer>
            <ImageText><Image src={dye3} fluid/></ImageText>
          </ImageContainer>
        </Col>
        <Col>
          <ImageContainer>
            <ImageText><Image src={dye4} fluid/></ImageText>
          </ImageContainer>
        </Col>
        </>
    )
}

export default MoreDye;