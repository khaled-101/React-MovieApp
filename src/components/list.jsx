import React from "react";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { Link,  } from "react-router";


export default function MovieCards(props) {
  const { movie } = props;
  const navigate = useNavigate();
  return (
    <>
      <Col className="Mcard" >
      <Link to={`/moviedetail/${movie.id}`} >   <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
        <div className="Mcard-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.id}</p>
          <p className="card-text">{movie.overview}</p>
        </div>
      </Col>
    </>
  );
}