import React, { useEffect, useState } from "react";import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import Client1 from './cuts/client1.PNG'
import Client42 from './cuts/client42.PNG';
import Spinner from 'react-bootstrap/Spinner';




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


function MoreHair(){
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
              <Image src={Client1} fluid/>
            </ImageText>
          </ImageContainer>
       </Col>
  
        <Col>
          <ImageContainer>
            <ImageText><Image src={Client42} fluid/></ImageText>
          </ImageContainer>
        </Col>
        </>
    )
}

export default MoreHair;