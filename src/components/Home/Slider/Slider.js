import React from 'react';
import doctor from '../../../images/doctor.png'
import doctor1 from '../../../images/doctor-sm.png'
import doctor2 from '../../../images/ema.png'
import ict1 from '../../../images/ict-training1.jpg'
import ict2 from '../../../images/ict2.jpg'
import ict3 from '../../../images/ict3.jpg'
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel>
        <Carousel.Item className='h-50'>
          <img
            className="d-block h-25 w-100"
            src={ict1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src={ict2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src={ict3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;