import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const StyledLi = styled.li`
  list-style: none;
  background-color: #282C35;
  color: white;
  margin-left:-30px;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`

const StyledButton = styled(Button)`
  margin-bottom: 25px;
`

const StyledSpan = styled.span`
  color: gold;
`


export function Review() {
  const [showMore, setShowMore] = useState(false);

  //review object
  const reviews = [
    {id: 1, name: "Kevin Gomez", review: "Great barbershop, they do the very best they can on your hair, take their time. Very nice place, attentive personnel, clean environment. All barbers are well equipped and knowledgable on which cuts you're asking for.", rating: 5 },
    {id: 2, name: "Mark Carreon", review: "Very good customer service and fast good quality haircuts! Definitely going back there to cut my hair!", rating: 5 },
  ]

  const moreReviews = [
    {id: 3, name: "Giovanni Garcia", reviews: "John hooked me up with one of the cleanest cuts I’ve ever had", rating: 5},
    {id: 4, name: "Cody Eaton", reviews: "This place is top notch, Great hospitality, Great atmosphere, And very attentive about your haircut, Stop by if your ever in Los Fresnos. They’ll take care of you", rating: 5},
    {id: 5, name: "L. Guzman", reviews: "Always excellent service. Dominique has cut both my boys hair both times I've been there. ", rating: 5},
    {id: 6, name: "Shelly Belis", reviews: "Great hair cut, not only was everyone in there nice, they were respectful as well. Not once did we feel they were annoyed with us not knowing what haircut my son wanted exactly. Dominique did a wonderful job, lots of patience. Great price too!", rating: 5},
    {id: 7, name: "Daniel D.", reviews: "Did a great job on my haircut and beard trim and the environment was friendly!", rating: 5},
    {id: 8, name: "Mike R.", reviews: "Good experience with Chris and cool barber. Best fade and line up by far. With my haircut looking clean each time I’ll be a repeat customer.", rating: 5},
    {id: 9, name: "Mark A.", reviews: "Chris is not only a hell of a barber. Who seems to always bring back my hair line. But he’s a great friend and has great energy. Got my hair cut by hi", rating: 5},
    {id: 10, name: "Lucero G.", reviews: "Great place, i take my son here and he says he loves to come here to get his haircuts", rating: 5},

  ]


  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StyledSpan key={i}>&#9733;</StyledSpan>); // Unicode for star character
    }
    return stars;
  };

  const clickedMore = () => {
    setShowMore(!showMore);
  }

  
  //map through review
  const individualReview = reviews.map((review) => {
    return (
        <StyledLi key={review.id} className="review-list">
          <Stack direction="horizontal" gap={2}>
            <p>{review.name}</p>
            <p>{generateStars(review.rating)}</p>
          </Stack>
          <p>{review.review}</p>
        </StyledLi>
    )
  });

  const moreReview = moreReviews.map((moreReview) => {
    return (
        <StyledLi key={moreReviews.id} className="review-list">
          <Stack direction="horizontal" gap={2}>
            <p>{moreReview.name}</p>
            <p>{generateStars(moreReview.rating)}</p>
          </Stack>
          <p>{moreReview.reviews}</p>
        </StyledLi>
    )
  });



  return (
    <>
      <StyledContainer>
        <ul>
          {individualReview}
          {showMore && moreReview}
        </ul>
      </StyledContainer>
      

      <StyledContainer>
        <StyledButton variant="outline-light" onClick={clickedMore}>{!showMore? "Show More" : "Close"}</StyledButton>
      </StyledContainer>
    </>
  );
}

export default Review;