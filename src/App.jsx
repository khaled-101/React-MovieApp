import { BrowserRouter , Route , Routes } from "react-router-dom"; // Correct import
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyNavBar from "./components/nav";
import MovieDetail from "./pages/MovieDetail";
import Movielist from "./pages/Movielist";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar/>
        <Routes>
          <Route path="/movielist" element={<Movielist/>}></Route>
          <Route path="/moviedetail/:id" element={<MovieDetail/>}></Route>
          <Route path="/watchlist" element={<Watchlist/>}></Route>
          <Route path="*" element={<NotFound />} />
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;