import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
           
        <Wrap2>
            <img src="/images/viewers-disney.png" onClick="/Details"/>
        </Wrap2>
    
        <Wrap4>
            <img src="/images/viewers-pixar.png"/>
        </Wrap4>
        <Wrap3>
            <img src="/images/viewers-marvel.png"/>
        </Wrap3>
        <Wrap1>
            <img src="/images/viewers-starwars.png"/>
        </Wrap1>
        <Wrap2>
            <img src="/images/viewers-national.png"/>
        </Wrap2>

          
        </Container>
    )
}

export default Viewers

const Container=styled.div`
margin-top:10px;
    display: grid;
    grid-gap: 20px;
padding: 20px 0px 26px;
grid-template-columns: repeat(5 , minmax(0, 1fr));

`
const Wrap  = styled.a`
border-radius:10px;
cursor:pointer;
border: 3px solid rgba(249 ,249 ,249, 0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.49, 0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit: cover;
}

 &:hover{
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb (0 0 0 / 72%) 0px 30px 22px -10px;
     transform: scale(1.05);
     border-color:white;
     
    
 }
`
const Wrap1 =styled.div`
border-radius:10px;
cursor:pointer;
border: 3px solid rgba(249 ,249 ,249, 0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.49, 0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit: cover;
}

 &:hover{
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb (0 0 0 / 72%) 0px 30px 22px -10px;
     transform: scale(1.05);
     border-color:white;
     background: url("/images/photo.jpg") no-repeat;
    
 }

`
const Wrap2 =styled.a`
border-radius:10px;
cursor:pointer;
border: 3px solid rgba(249 ,249 ,249, 0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.49, 0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit: cover;
}

 &:hover{
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb (0 0 0 / 72%) 0px 30px 22px -10px;
     transform: scale(1.05);
     border-color:white;
     background: url("/images/images.jpg") no-repeat;
    
 }
 `
 const Wrap3 =styled.a`
 border-radius:10px;
 cursor:pointer;
 border: 3px solid rgba(249 ,249 ,249, 0.1);
 box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
 rgb(0 0 0 /73%) 0px 16px 10px -10px;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.49, 0.94) 0s;
 img{
     width:100%;
     height:100%;
     object-fit: cover;
 }
 
  &:hover{
     box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
     rgb (0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color:white;
      background: url("/images/marvel.jpg") no-repeat;
     
  }
  `
  const Wrap4 =styled.a`
 border-radius:10px;
 cursor:pointer;
 border: 3px solid rgba(249 ,249 ,249, 0.1);
 box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
 rgb(0 0 0 /73%) 0px 16px 10px -10px;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.49, 0.94) 0s;
 img{
     width:100%;
     height:100%;
     object-fit: cover;
 }
 
  &:hover{
     box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
     rgb (0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color:white;
      background: url("/images/imagess.jpg") no-repeat;
     
  }
  `