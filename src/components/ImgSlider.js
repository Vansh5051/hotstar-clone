import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import styled from 'styled-components';
function Imgslider() {
     let setting={
         dots: true,
         infinite:true,
         speed:500,
         slidesToShow:1,
         slidesToScroll:1,
         autoplay: true
     }
    return (
        
        <Carousel  {... setting} >
            
            <Wrap>
                 <img src="/images/slider-badging.jpg"  />
            </Wrap>
            <Wrap>
                 <img src="/images/slider-badag.jpg"  />
            </Wrap>
            <Wrap>
                 <img src="/images/slider-scale.jpg"  />
            </Wrap>
            <Wrap>
                 <img src="/images/slider-scales.jpg"  />
            </Wrap>
        </Carousel>
        
    )
}

export default Imgslider

const Carousel = styled(Slider)`

margin-left: 25px;
margin-right:25px;
background: fixed;
ul li button{
    &:before{
        color: rgb(150,158,171);
    }
}

.slick-list{
    overflow: visible;
   }
   button{
    z-index: 1;
}
`
const Wrap = styled.div`
cursor: pointer;
    img{
    border: 5px solid transparent;
    border-radius:5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration:800ms;
    &:hover{
        border: 4px solid rgba(249,249,249,0.8);
        
    }
   }
`



