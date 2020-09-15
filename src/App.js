import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Banner />

      <Row title="NETFLIX ORIGINALS" fetch={requests.fetchTV} isLargeRow={true} />
      <Row title="Trending Now" fetch={requests.fetchTrending}/>
      <Row title="Top Rated" fetch={requests.fetchTopRated}/>
      <Row title="Action Movies " fetch={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetch={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetch={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetch={requests.fetchRomanceMovies}/>
      <Row title="SciFi Movies" fetch={requests.fetchSciFi}/>
      <Row title="Mystery Movies" fetch={requests.fetchMystery}/>
      <Row title="Western Movies" fetch={requests.fetchWestern}/>
      <Row title="Animation Movies" fetch={requests.fetchAnimation}/>

    </div>
  );
}

export default App;
