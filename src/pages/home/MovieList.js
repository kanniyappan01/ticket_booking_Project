import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.scss'

const getPostUrl = (posterPath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
}

const MovieList = ({movie}) => {

  return (
    <div className='movie_wraper col-md-4 col-sm-12 mb-3'>
        <Link>
            <div className='movie_warper_inner p-2'>
                <div className='image_wraper'>
                    <img className='poster_image' src={getPostUrl(movie.backdrop_path)} alt="poster"/>
                    <Link className='movie_booking_btn' to={`/seat/${movie.id}`}>BOOK</Link>
                </div>
                <div className='movie_detials my-2'>
                    <h5 className='movie_title mb-1'>{movie.title}</h5>
                    <span className='movie_date mb-2'>{`Release: ${ movie.release_date}`}</span>
                    
                </div>
            </div>
        </Link>
    </div>
  )
}

export default MovieList