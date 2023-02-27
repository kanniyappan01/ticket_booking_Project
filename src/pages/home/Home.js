import React, { useContext } from 'react';
import './MovieList.scss'

import MovieList from './MovieList';
import { wraperContext } from '../../App';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {

  const {state,dispatch}=useContext(wraperContext);
  console.log(state.movieList)

  return (
    <>
      <section>  
        <div className='container'>
          <div className='movie_list_wraper'>
          <div className='movie_header mb-4'>
              <span className='seperator seperator_left'></span>
              <h2>Now Playing</h2>
              <span className='seperator seperator_right'></span>
            </div>
            <div className='movie_list_wraper_inner'>
            
              <div className='row'>
                {state.movieList && state?.movieList.map((movie,i)=>(
                    <MovieList movie={movie} index={i+1} key={i}/>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gallery/>
    </>
  )
}

export default Home