import React from 'react';
import './sideBar.scss'

const SideBar = ({movie,handleSubmit,seatSelected,handleCancel}) => {
    console.log(seatSelected)
  return (
    <div className='movie_info_wraper p-2'>

        <div className='movie_info'>
            <div className='movie_info'>
                <h3 className='movie_title'>{movie.title}</h3>
                <h5 className='movie_view'>{`${movie.original_language} | 2D | U`}</h5>
            </div>
            <div className='theater_info_wraper'>
                <p className='header'>THEATRES</p>
                <h5 className='theater_info'>Sangam Cinemas 4K RGB Laser Dolby Atmos |<br/>Sangam 4K RGB Laser Dolby Atmos</h5>
            </div>
            <div className='show_time_info'>
                <p className='header'>SHOWTIME</p>
                <p className='time mb-2'>{`${movie.release_date} :12:10 PM`}</p>
            </div>
            <div className='selected_seats_wraper py-3'>
                <ul className='selected_seats p-0'>
                    {seatSelected.map((seat,i)=>(
                        <li key={i}className='seat_green mb-2'>{seat}</li>
                    ))}
                    
                </ul>
            </div>
            <div className='selected_seats_counts py-3'>
                <span className='seat'>{`${seatSelected.length} Seat(s)`}</span>
                <h3 className='total_price'>{`₹365`}</h3>
            </div>
            <div className='booking_btn_wraper'>
                <button className='submit_btn mb-3' onClick={handleSubmit}>Submit</button>
                <button className='cancel_btn ' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar