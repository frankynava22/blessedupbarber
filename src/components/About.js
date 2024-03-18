import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  margin-top: 10px;
  background-color: black;
  color: white;
  padding: 20px;
`;

const ImageContainer = styled.div`
  background-color: orange;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

const ImageText = styled.p`
  margin: 0;
`;

const TextContainer = styled.div`
  background-color: orange;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
`;


export function About() {
    return (
      <ContainerWrapper>
        {/* Using Row and Col from React Bootstrap for layout */}
        <Row xs={1} md={3} lg={3} className="g-4">
          {/* Each image text is wrapped inside a Col component */}
          <Col>
            <ImageContainer>
              <ImageText>Image 1</ImageText>
            </ImageContainer>
          </Col>
          <Col>
            <ImageContainer>
              <ImageText>Image 2</ImageText>
            </ImageContainer>
          </Col>
          <Col>
            <ImageContainer>
              <ImageText>Image 3</ImageText>
            </ImageContainer>
          </Col>
        </Row>

        {/* Section for Artist and Facts */}
        <Row className="justify-content-center">
            <Col xs={12} lg={6}>
            <TextContainer>
                <Text>Artist</Text>
            </TextContainer>
            </Col>
            <Col xs={12} lg={6}>
            <TextContainer>
                <Text>Facts</Text>
            </TextContainer>
            </Col>
        </Row>

        <Stack>
                <TextContainer>
                    <Text>Where Are We</Text>
                </TextContainer>
                <ImageContainer>
                    <ImageText>map</ImageText>
                </ImageContainer>
        </Stack>

        
      </ContainerWrapper>
    );
  }

export default About;