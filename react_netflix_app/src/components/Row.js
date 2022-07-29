import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import MovieModal from './MovieModal/MovieModal';

import './Row.css';

const Row = ({ title, id, fetchUrl, isLargeRow }) => {

    const [movies, SetMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, SetMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();

    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log('request', request);
        SetMovies(request.data.results);
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        SetMovieSelected(movie);
    }

    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    

  return (
    <section className="row">
        <h2>{title}</h2>
        <div className="slider">
            <div className="slider__arrow-left">
                <span className="arrow"
                    onClick={() => {document.getElementById(id).scrollLeft -= window.innerWidth -80;}}
                >
                    {"<"}
                </span>
            </div>
            <div id={id} className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        loading="lazy"
                        alt={movie.name}
                        onClick={()=> handleClick(movie)}
                    />
                ))}
            </div>
            <div className="slider__arrow-right">
                <span className='arrow'
                    onClick={() => {document.getElementById(id).scrollLeft += window.innerWidth -80;}}
                >
                    {">"}
                </span>
            </div>
        </div>

        {
            modalOpen && (
                <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            )
        }
    </section>
  )
}

export default Row