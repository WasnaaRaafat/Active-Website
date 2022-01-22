import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonial_1 from '../images/testimonial-1.jpg';
import testimonial_2 from '../images/testimonial-2.jpg';
const Testimonials = () => {
  return (
    <div>
      <div className='Testimonials'>
        <div className='testimonials-section' id='Testimonials'>
          <Carousel
            renderBottomCenterControls={false}
            className='fade'
            infiniteLoop
            autoPlay
            showThumbs={false}
            // interval='5000'
            fade={true}
            swipeable={false}
            showArrows={false}
            dots={false}
          >
            <div className='test-slider'>
              <img src={testimonial_1} className='slider-img' />
              <div className='slider-text'>
                <h1>
                  "Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet. Donec sed odio dui. Aenean eu leo quam..."
                </h1>
                <p>SUSAN SIMS, INTERACTION DESIGNER AT XYZ</p>
              </div>
            </div>
            <div className='test-slider'>
              <img src={testimonial_2} className='slider-img' />
              <div className='slider-text'>
                <h1>
                  "Cras mattis consectetur purus sit amet fermentum. Donec sed
                  odio dui. Aenean lacinia bibendum nulla sed consectetur...."
                </h1>
                <p>SUSAN SIMS, INTERACTION DESIGNER AT XYZ</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
