import React from 'react';
import './Gallery.scss';
import {galleryImages} from '../../constants/SeatOptions'
import GalleryImagesList from './GalleryImagesList';

const Gallery = () => {
  return (
    <section>
        <div className='container'>
            <div className='gallery_wraper'>
                
                <div className='gallery_wraper_inner'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-6 col-sm-12'>   
                            <div className='gallery_content'>
                                <h2 className='gallery_header mb-4'>Videos and photos</h2>
                                <div className='image_waper'>
                                    <img src={'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_30.jpg'} alt='theater_img'/>
                                </div>
                                <h4 className='mb-2 mt-4'>Cloverfield Lane</h4>
                                <p>A young woman wakes up after a terrible accident to find that she’s… locked in a cellar with a doomsday prepper,… who insists that he saved her life and that the world outside is uninhabitable following an apocalyptic catastrophe. Uncertain what to believe, the woman soon….</p>
                            </div> 
                        </div>
                        <div className='col-lg-7 col-md-6 col-sm-12'>   
                            <div className='gallery_images_wraper'>
                                <div className='row'>
                                    {galleryImages.map((image,i)=>{
                                        return(
                                            <GalleryImagesList image={image} key={i}/>
                                        )
                                    })}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery