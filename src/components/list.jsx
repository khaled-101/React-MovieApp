import React from "react";
import Col from "react-bootstrap/Col";
import { useDispatch , useSelector} from 'react-redux';
import { Link,  } from "react-router";
import { addToWatchlist , removeFromwatchlist } from '../store/slices/watcllist.js';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite"; // For filled heart

export default function MovieCards(props) {
  const { movie } = props;
  const watchlist = useSelector((state) => state.myWatchlist.items); 
  const dispatch = useDispatch();  
  const isInWatchlist = watchlist.filter((m) => m.id === movie.id).length > 0;
  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(removeFromwatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    
    <>
      <Col className="Mcard" >
      <Link to={`/moviedetail/${movie.id}`} >   <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
        <div className="Mcard-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{`Rated : ${movie.vote_average}/10`}</p>
       
          {isInWatchlist ? (
            <FavoriteIcon
              className="topLove"
              style={{ color: "red" }} // Filled heart (red color)
              onClick={handleToggleWatchlist}
            />
          ) : (
            <FavoriteBorderIcon
              className="topLove"
              onClick={handleToggleWatchlist}
            />
          )}
        </div>
      </Col>
    </>
  );
}