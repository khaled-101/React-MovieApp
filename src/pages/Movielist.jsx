import React, { useEffect, useState } from 'react';
import { axiosInstance } from "../apis/config";
import MovieCards from '../components/list';
import { Container, Row } from 'react-bootstrap'; // Assuming you are using react-bootstrap for layout

export default function Movielist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInstance
      .get() 
      .then(response => setMovies(response.data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []); 
  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
}
