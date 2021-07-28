import React from 'react'
import styled from'styled-components'
function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="/images/minions.jpg"/>
                    <span>hello word</span>
   
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scale.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scales.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badging.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/cartoon.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/photoo.jpg"/>
                </Wrap>
                <Wrap>
                    <video src='/images/video.mp4'/>
                    <span>hello word</span>
                </Wrap>


            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
font-size:20px;
font-family:sans-serif;
`
const Content=styled.div`

display:grid;
grid-gap:25px;
grid-template-columns: repeat(4 , minmax(0, 1fr));
`

const Wrap =styled.div`
border-radius:10px;
cursor:pointer;
overflow: hidden;
border: 3px solid rgba(249 ,249 ,249, 0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.49, 0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit: cover;
}
video{
    width:100%;
    height:100%;
    object-fit: cover;

    &:hover .overlay{
        
    }
}


&:hover{
     transform: scale(1.3);
     border-color: rgba(249, 249, 249, 0.8);
     transition-delay: 0.2s;
     &:after{
        content:"";
        height:2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        transform: scaleX(1);
       
    }
 

}

`

