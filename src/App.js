import React from "react";
import './App.css';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests"; 
function App() {
  return (
    <div className="App">
     {/* <h1>Hello world i am building a netflix clone</h1> */}
     <Nav/>
     <Banner />
     <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOrignals} isLargeRow/>
     <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
     <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
     <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
     <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
     <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
     <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
     <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
// 78b91a8e512c594ef0148171381c174a
// https://netflix-clone-724b6.web.app
// demo app 
// get tmdb key 
// create a react app 
// set up firebase hosting 
// Get all the movies 
// Build the rows 
// Build the banner 
// Build the navbar 
// Add trailer pop ups npm