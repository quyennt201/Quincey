import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css'
import img1 from '../../assets/img/slideshow/slider_1.webp'
import img2 from '../../assets/img/slideshow/slider_2.webp'
import img3 from '../../assets/img/slideshow/slider_3.webp'

const fadeImages = [
  {
    url: img1,
    caption: 'First Slide'
  },
  {
    url: img2,
    caption: 'Second Slide'
  },
  {
    url: img3,
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%', height: "400px" }} src={fadeImage.url} />
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow