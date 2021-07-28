import React from 'react'
import style from 'styled-components'

function Details() {
    return (
        <Container>
           <Background>
               <img src="./images/main-disney.jpg"/>
           </Background>
           <ImageTitle>
                   <img src="./images/disney.png"/>
             </ImageTitle>
             <Control>
                 <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>play</span>
                 </PlayButton>
                 <TrailerButton>
                 <img src="/images/play-icon-White.png"/>
                    <span>Trailer</span>
                 </TrailerButton>
                 <AddButton>
                  <span> + </span>
                 </AddButton>
                 <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                 </GroupWatchButton>
             </Control>
           <SubTitle>
               Family English , 2018G
           </SubTitle>
           <Description>
           An ageing Chinese mom gets another chance at motherhood when one of her dumplings springs to 
           life as a lively, giggly dumpling boy but she finds that nothing stays cute and small flower 
           </Description>
        </Container>
    )
}

export default Details
  
const Container =style.div`
min-height: calc(100vh - 65px);
padding: 0 calc(0.5vw + 3px);
position:relative;
`
const Background =style.div`
position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:-1;
  opacity:0.8;
    
img{
  width:100%;
  height:100%;
  object-fit:cover;
}
`
const ImageTitle=style.div`
height:30vh;
width:35vw;
Img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`

const Control=style.div`
display:flex;
align-items:center;
`


const PlayButton =style.button`
border-radius: 5px;
font-size: 15px;
padding: 0px 24px;
margin-right:5px;
margin-left:30px;
margin-top:30px;
display: flex;
align-items:center;
height:56px;
background: rgb(249, 249, 249);
border:none;
letter-spacing:1.8px;
cursor:pointer;

  &:hover{
      background: rgb(198, 198, 198);
  }
  
`
const TrailerButton=style(PlayButton)`
 background: rgba(0, 0, 0, 0.3);
 border: 1px solid rgb(249, 249, 249);
 color: rgb(249, 249, 249);
 text-transform:uppercase;
`
const AddButton =style.button`
width:44px;
height:44px;
display:flex;
aligh-items:center;
justify-content:center; 
border-radius:50%; 
margin-top:25px;
margin-right: 25px;
background-color: rgba(0, 0, 0, 0.6); 
border: 1px solid rgb(249, 249, 249);
cursor:pointer;
span{
  font-size:35px;
  color: white; 
}


`
const GroupWatchButton =style(AddButton)`
background: rgb(0, 0, 0);

`
const SubTitle =style.div`
 color: rgb(249, 249, 249);
 font-size:20px;
 margin-top:30px;
 min-height:20px;
 margin-left:30px;
`

const Description=style.div`
max-width:590px;
letter-spacing:0.5px;
 text-align: center;
font-size:20px;
line-height:1.3;
margin-top:30px;
margin-left:20px;
color: rgb(249, 249, 249);
`