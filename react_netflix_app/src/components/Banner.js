import axios from '../api/axios';
import React, { useState, useEffect } from 'react'
import requests from "../api/requests"
import styled from 'styled-components';

import "./Banner.css";

const Banner = () => {

    const [movie, setMovie] = useState([]);

    const [isClicked, setIsClicked] = useState(false);

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
    
    console.log('movie', movie);

    if(!isClicked) {

        return movie.length !== 0 ? (
            <header
                className='banner'
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition : "top center",
                    backgroundSize: "cover"
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className="banner__buttons">
                        <button className="banner__button play"
                            onClick={() => setIsClicked(true)}
                        >
                            Play
                        </button>
                        <button className="banner__button info">More Information</button>
                    </div>

                    <h1 className="banner__description">
                        {truncate(movie.overview, 100)}
                    </h1>
                </div>
                <div className='banner--fadeBottom' />
            </header>
        ):<div></div>
    } else {
        return (
            <Container>
                <HomeContainer>
                    <Iframe
                        width="640" height="360" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                        title="YouTube video player"
                        frameborder="0" allow="autoplay; fullscreen"
                        allowfullscreen
                    >
                    </Iframe>
                </HomeContainer>
            </Container>
        )
    }
}

const Container = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const HomeContainer = styled.div`
    width : 100%;
    height : 100%;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: /1;
    opacity: 0.65;
    border: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export default Banner