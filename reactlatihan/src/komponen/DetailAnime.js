// src/components/DetailAnime.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import '../asset/DetailAnime.css';

function DetailAnime() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => response.json())
      .then((data) => setAnime(data.data))
      .catch((error) => console.error('Error fetching anime details:', error));
  }, [id]);

  return (
    <Container className="mt-5 detail-anime-container">
      {anime ? (
        <Card className="anime-detail-card shadow-sm d-flex flex-row">
          <CardImg
            alt={anime.title}
            src={anime.images?.jpg?.image_url}
            className="anime-detail-img"
          />
          <CardBody className="anime-detail-body">
            <CardTitle tag="h4" className="anime-title">{anime.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted anime-rating">
              Rating: {anime.rating}
            </CardSubtitle>
            <CardText className="anime-score">Score: {anime.score}</CardText>
            <CardText className="anime-synopsis">{anime.synopsis}</CardText>
          </CardBody>
        </Card>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </Container>
  );
}

export default DetailAnime;
