import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { movieId } = useParams();
  //console.log('movieId', movieId);

  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}`
      )
      // console.log('request', request);
      setMovie(request.data)
    }
    fetchData();
  }, [movieId]); // everytime the movieId is changed, call the async function fetchData

  if(!movie) return <div>해당 영화에 대한 상세 정보가 없습니다.</div>
  

  return (
    <section>
      <img
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  )
}

export default DetailPage