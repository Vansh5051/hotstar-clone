import React from 'react'
import styled  from 'styled-components'
function SignUp() {
  return (
    <Container>
        <Content>
          <form action="/home">
               <h1>Sign In</h1>
               <br></br>
              <input type="Email"  id="email" placeholder="Email"/>
              <br></br>
              <input type="Password"  autoComplete="off" id ="password" placeholder="Password"/>
              <br></br>
              <br></br>
              <button type="submit" id="submit"><i>Submit</i></button>
              <form action= "/signup">
              <div>
              don't have account? <span><button>signUp</button></span>
              </div>
              </form>
          </form>
        </Content>
      </Container>
    )
}


export default SignUp


const Content=styled.div`
width: 400px;
height: 400px;    
margin-left: 30%;
margin-right: 30%;
margin-top:8%;
background-color: grey;
opacity:100%;
border-radius:20px;
justify-content: center;
align-items:top;
display:flex;
  border: 3px solid cornflowerblue ;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 10px -10px;
  input{
    width:200px;
    height:30px;
    border-radius:5px;
    margin-top:30px;
    
  }
  button{
    width:200px;
    height:30px;
    border-radius:5px;
    margin-top:10px;
    cursor:pointer;
    background: #0483ee;
    &:hover{
      color: #f9f9f9;
    }
  }
  h1{
    margin-top:10px;
   
  }
  span{
    font-size: 14px;
    letter-spacing: 1.50px;
    position: relative;
    cursor:pointer;
    justify-content:left;
    
    &:after{
        content:"";
        height:2px;
        background: white;
        position: absolute;
        left: 0;
        right: 
        0;
        bottom: 0;
        opacity:1;
        transform: scaleX(0); 
    } 
    button{
    width:50px;
    height:20px;
    border-radius:0px;
    margin-top:0px;
    cursor:pointer;
    background: none;
    border:none;
    color: #f9f9f9;
    &:hover{
      color: #000;
    }
  }  
  GoogleLogin{
    width:100%;
    height:100%;
    font-size:30px;
     
  }
`

const Container =styled.div`
height: calc(100vh - 65px);
display:flex;
align-items:top;
justify-content:center;

&:before{
  background-position:top;
  background-size:cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  opacity:50%;
  z-index: -1;
}
`