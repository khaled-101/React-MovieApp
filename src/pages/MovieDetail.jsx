import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../apis/config";
import { Col } from "react-bootstrap";
export default function MovieDetail() {
  const [movies, setMovies] = useState([]);
  const poster_path = useParams();
  console.log(poster_path.id);
  useEffect(() => {
    axiosInstance
      .get(
        `https://api.themoviedb.org/3/movie/${poster_path.id}?api_key=7f74ffb2996003663e3879edf6de0988`
      )
      .then((movie) => setMovies(movie.data))
      .catch((err) => console.log("Error fetching movies:", error));
  }, [poster_path]);
  console.log(movies);

  return (
    <Col className="selectedMcard">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.title}
      />
      <div className="selcard-body">
        <h5 className="selcard-title">{movies.title}</h5>
        <p className="selcard-text">{movies.overview}</p>
        <p className="selcard-text">{`Rated:${movies.vote_average}/10`}</p>
        <p className="selcard-text">
          <strong>Release Date:</strong> {movies.release_date}
        </p>
      </div>
    </Col>
  );
}
