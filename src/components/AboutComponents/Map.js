import React from "react";
import Location from './map.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



function Map(){
    const mapLink =  "https://www.google.com/maps/place/Blessedupbarber+Studio/@26.0733566,-97.4769107,15.5z/data=!4m14!1m7!3m6!1s0x866f985224756d4d:0xdd147fb4e0fa64f3!2s315+N+Arroyo+Blvd+%235,+Los+Fresnos,+TX+78566!3b1!8m2!3d26.0741135!4d-97.4764506!3m5!1s0x866f99823fcbbbcf:0xacf418d08aaa99db!8m2!3d26.0741288!4d-97.4764486!16s%2Fg%2F11jq80b4sx?entry=ttu";

    return (
        <Container>
        <Row>
          <Col >
            <a href={mapLink} rel="noreferrer" target="_blank">
            <Image src={Location} thumbnail fluid/>
            </a>
          </Col>
        </Row>
      </Container>
    );
  };

export default Map;