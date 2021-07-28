import React from 'react'
import styled from 'styled-components'

function LogIn() {
    return (
        <Container>
           <Content>
              <ContentOne src="/images/cta-logo-one.svg"/>
              <form action="/log">
              <SignUp> GET ALL HERE</SignUp>
              </form>
              <Description>
              Just to keep you informed, we are phasing out the email ID and password-based Logins with the phone number and 
              ‘one time password’ (OTP) based login system. Accounts with OTP based logins cannot be misused as a unique OTP 
              is sent to the user’s registered phone number at the time of login
              </Description>
              <ContentTwo src="/images/cta-logo-two.png"/>
           </Content>
        </Container>
    )
}

export default LogIn
  
const Container =styled.div`
position:relative;
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
    opacity:0.9;
    z-index: -1;
}

` 

const Content=styled.div`
 max-width: 650px;
 padding: 80px 40px;
 width:90%;
 display:flex;
 flex-direction: column;
 align-items:center;
 
`

const ContentOne=styled.img`

`

const SignUp = styled.button`
width:100%;
background-color: #0063e5;
font-weight:bold;
padding: 17px 0;
color: #f9f9f9;
border-radius:5px;
text-align:center;
font-size: 18px;
cursor:pointer;
transition: all 250ms;
letter-spacing:1.5px;
margin-top: 8px;
margin-right:500px;
margin-bottom: 12px;
&:hover{
    background: #0483ee;
}

`

const Description=styled.p`
 font-size:15px;
 letter-spacing:0.5px;
 text-align: center;
`

const ContentTwo=styled.img`
margin-top:20px;
width:100%;
`