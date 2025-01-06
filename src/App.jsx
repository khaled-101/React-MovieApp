import { BrowserRouter , Route , Routes } from "react-router-dom"; // Correct import
import React, { Suspense, useState } from "react";
import Container from "react-bootstrap/Container";
import './App.css';
import LanguageContext from "./contexts/LanguageContext.js"; 
const MyNavBar = React.lazy(() => import("./components/nav"));
const MovieDetail = React.lazy(() =>import("./pages/MovieDetail")); 
const Watchlist = React.lazy(() => import("./pages/Watchlist"));
const NotFound = React.lazy(() => import ("./pages/NotFound"));
const ProfileContent = React.lazy(() => import ("./pages/regisriation"));
const Movielist = React.lazy(() => import("./pages/Movielist"))
function App() {
  const [lang, setLang] = useState("en");

  return (
    
    <>
      <BrowserRouter>
      <LanguageContext.Provider value={{ lang, setLang }}>
      <Container
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={lang === "ar" ? "text-right" : "tet-left"}
        fluid
      >
        <MyNavBar/>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/registration" element={<ProfileContent/>}></Route>
          <Route path="/movielist" element={<Movielist/>}></Route>
          <Route path="/moviedetail/:id" element={<MovieDetail/>}></Route>
          <Route path="/watchlist" element={<Watchlist/>}></Route>
          <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          </Container>
          </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
