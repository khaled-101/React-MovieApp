import React, { useEffect, useState } from 'react';
import { axiosInstance } from "../apis/config";
import MovieCards from '../components/list';
import { Container, Row } from 'react-bootstrap'; // Assuming you are using react-bootstrap for layout
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Movielist() {
  const [movies, setMovies] = useState([]);
  const[filteredmovies, setfiltered] =  useState([])
  const fetchData = async() => {
    try{
      const response = await axiosInstance.get() 
    
        setMovies(response.data.results) 
        setfiltered(response.data.results)}
      catch(error) { console.error('Error fetching movies:', error);}

  }
  
  useEffect(() => {
   fetchData()
  }, []); 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.searchInput.value;
    if(searchValue){
      const filteredmovie = movies.filter((movie) => movie.title.toLowerCase().includes(searchValue.toLowerCase()))
      setfiltered(filteredmovie)
    }else{
      setfiltered(movies)
    }
  };
  console.log(filteredmovies)
  
  
  return (<> <div className='search-bar'>
    <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            id="searchInput"
          />
          <Button type="submit" variant="outline-success">Search </Button>
        </Form >
  </div>
  
    <Container>
      <Row>
        {filteredmovies.map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  </>
   
  );
}


