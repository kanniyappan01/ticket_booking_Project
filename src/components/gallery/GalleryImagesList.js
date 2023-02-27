import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


const GalleryImagesList = ({image}) => {

    // const handleZoom =(e)=>{
    //     e.target.classList.add('zoom')
    // } 
  return (
        <>
        <div className='col-lg-4 col-md-4 col-sm-6' >
            <div className='gallery_images_box mb-4 '>
                <img src={image} className='gallery_img ' alt='gallery_image'/>
                <span className='search_icon_wraper'>
                    <SearchIcon className='search_icon'/>
                </span>
            </div>
        </div>
        </>
  )
}

export default GalleryImagesList