import React, { Component } from 'react'
import '../styles/App.css'
import Carousel from 'react-bootstrap/Carousel'
import firstImg from '../assets/firstCarouselImg.jpg'
import secondImg from '../assets/secondCarouselImg.jpg'
import thirdImg from '../assets/thirdCarouselImg.jpg'


export default class
  extends Component {
  render() {
    return (
      <Carousel className='mb-5'>
        <Carousel.Item>
          <img
            src={firstImg}
            alt="first"
            className="image carousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={secondImg}
            alt="second"
            className="image carousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={thirdImg}
            alt="third"
            className="image carousel"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}
