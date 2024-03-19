import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import logo from './logo.mp4'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

const StyledContainer = styled(Container)`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding-top: 10px;
`

const StyledVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
`
const StyledVideoContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  background-color: black;
`

export function Video() {

  return (
    <StyledContainer fluid>
      <Row>
        <Col>
          <StyledVideo autoPlay loop muted>
            <source src={logo} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default Video;
