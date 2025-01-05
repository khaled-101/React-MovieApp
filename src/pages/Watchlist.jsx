import { useSelector, useDispatch } from 'react-redux';
import { removeFromwatchlist, clearwatchlist } from '../store/slices/watcllist'; // or '../redux/watchlistSlice'
import { Link } from 'react-router-dom';

const Watchlist = () => {
  const dispatch = useDispatch();
  const watchlistItems = useSelector((state) => state.myWatchlist.items);

  return (
    <div className="container mt-5">
    <h2 className="text-center mb-5 text-black">My Watchlist</h2>
    
    {watchlistItems?.length === 0 ? (
      <p className="text-center text-black">Your watchlist is empty!</p>
    ) : (
      <ul className="list-group list-group-flush">
        {watchlistItems?.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center p-4 border-0 shadow-sm rounded mb-3 bg-light"
          >
            <div className="d-flex align-items-center">
            <Link to={`/moviedetail/${item.id}`} className="text-decoration-none">
                   <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={`${item.title} Poster`}
                style={{
                  width: '120px',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
                </Link>
             
              <div className="ms-3">
                <Link to={`/moviedetail/${item.id}`} className="text-decoration-none">
                  <h5 className="text-dark mb-1">{item.title}</h5>
                </Link>
                <p className="text-muted">{item.release_date?.slice(0, 4)}</p>
              </div>
            </div>
            
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch(removeFromwatchlist(item.id))}
              aria-label={`Remove ${item.title}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  
    <div className="d-flex justify-content-center mt-4">
      <button
        className="btn btn-danger"
        onClick={() => dispatch(clearwatchlist())}
        disabled={watchlistItems?.length === 0}
      >
        Clear Watchlist
      </button>
    </div>
  </div>
  
  );
};

export default Watchlist;
