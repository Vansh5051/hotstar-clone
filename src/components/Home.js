import React,{useEffect} from 'react'
import styled from'styled-components'
import Imgslider from './ImgSlider'
import Viewers from'./Viewers'
import Movies from "./Movies";
function Home() {

    return (
        <Container >
         <Imgslider />
         <Viewers />
         <Movies />
        </Container>
    )
}

export default Home


const Container =styled.main`
min-height: calc(100vh - 65px);
padding: 0 calc(3.5vw + 5px);
position: relative;



&:before{
    background: url("/images/home-background.png") center center /cover
    no-repeat fixed;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: -1;
}

`