import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import requests from "./requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
    // every time this code loads this snippet of code runs
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with-networks=" // something like that
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
  }
  const handleClick = (movie) => {
      if(trailerUrl)
      {
          setTrailerUrl("");
      }
      else{
          movieTrailer(movie?.name || "").then(url => {
             const urlParams = new URLSearchParams(new URL(url).search);
             setTrailerUrl(urlParams.get('v'));
          }).catch(error => console.log(error))
      }
  }
  //   console.log(movies);
  // the empty array here means run once when the row loads and don't run again
  // we need a snipet of code which runs based on specific condition variable
  return (
    <div className={"row"}>
      <h2 style={{ color: "white" }}>{title}</h2>
      <div className={"row__posters"}>
        {/* several row__posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick = {() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
     { trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
    </div>
  );
}

export default Row;
