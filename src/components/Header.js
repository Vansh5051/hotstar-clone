import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav> 
            <Logo src="/images/logo.svg" />
            <NavMenu>
              <a>
                  <img src="/images/home-icon.svg" />
                  <span>HOME</span>
              </a>
              <a>
                  <img src="/images/search-icon.svg" />
                  <span>SEARCH</span>
              </a>
              <a>
                  <img src="/images/watchlist-icon.svg" />
                  <span>WATCHLIST</span>
              </a>
              <a>
                  <img src="/images/original-icon.svg" />
                  <span>ORIGINALS</span>
              </a>
              <a>
                  <img src="/images/movie-icon.svg" />
                  <span>MOVIES</span>
              </a>
              <a>
                  <img src="/images/series-icon.svg" />
                  <span>SERIES</span>
              </a>
            </NavMenu>
            <UserImg src="./images/unnamed.gif"></UserImg>
        </Nav>
    )
}

export default Header


const Nav =styled.nav`
height: 65px;
background: #090b13;
display: flex;
overflow: hidden;
padding:0;
margin:0;


`
const NavMenu =styled.div`
  display:flex;
  margin-left: 40px;
  aligh-items: center;
  a{
      display:flex;
      align-items: center;
      padding: 0 12px;
      color: white;
      cursor: pointer;
      img{
          height: 25px;
      }
      span{
          font-size: 14px;
          letter-spacing: 1.50px;
          position: relative;
          &:after{
              content:"";
              height:2px;
              background: white;
              position: absolute;
              left: 0;
              right: 
              0;
              bottom: 0;
              opacity:0;
              transform: scaleX(1);
             
          }
      }  

       &:hover{
           span:after{
               tansform: scaleX(1);
               opacity: 1;
           }
       
  }
`
  

const Logo=styled.img`
width: 80px;

`
const UserImg=styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-top:10px;
margin-left:640px;
cursor: pointer;`


    
    


