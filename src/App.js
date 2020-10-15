import React from 'react';
import './App.css';
import Row from "./Components/Row/Row";
import requests from "./axios/requests";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="app">
        <Nav/>
        <Banner/>
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='В тренде' fetchUrl={requests.fetchTrending}/>
        <Row title='Топ Рейтинга' fetchUrl={requests.fetchTopRated}/>
        <Row title='Боевики' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Комедии' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Хорроры' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Романтика' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Документальные' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

