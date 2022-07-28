import axios from '../api/axios';
import React, { useState, useEffect } from 'react'
import requests from "../api/requests"

import "./Banner.css";

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        
        // bring the data of current onscreen movies info
        const request = await axios.get(requests.fetchNowPlaying);
        // asynchronous call: call -> not immediate response => data will be managed their requests => takes some time(await) => after managing requests, the data will be contained the variable
        // console.log(request)

        // get the one movie ID among several movies
        const movieId = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        // bring that movie detailed info including video info
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "video" },
        });
        
        setMovie(movieDetail);
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header
        className='banner'
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition : "top center",
            backgroundSize: "cover"
        }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie.title || movie.name || movie.original_name}
            </h1>

            <div className="banner__buttons">
                <button className="banner__button play">Play</button>
                <button className="banner__button info">More Information</button>
            </div>

            <h1 className="banner__description">
                {truncate(movie.overview, 100)}
            </h1>
        </div>
        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner