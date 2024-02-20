import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './BannerHome.css'

function BannerHome() {
  return (
    <div className="banner ">
        <Carousel >
        <Carousel.Item>
            <img className='img-fit' src="slide1.jpg" width="100%" height="600"></img>
            <Carousel.Caption>
            <h2 className='font-slide1'>Electronics at Great Prices</h2>
            <h4 className='font-slide1-sub'>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='img-fit' src="slide2.jpg" width="100%" height="600"></img>
            <Carousel.Caption>
            <h2 className='font-slide2'>Clothings like Never Before Prices</h2>
            <h4 className='font-slide2-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="slide3.png" width="100%" height="600"></img>
            <Carousel.Caption>
            <h2 className=''>Great Discounts at Black Friday Sales</h2>
            <p className=''>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>        
    </div>
  )
}

export default BannerHome