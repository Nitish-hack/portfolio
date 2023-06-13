import React, { useState } from 'react'
import styled from "styled-components";
import {AiOutlineMail} from "react-icons/ai"
import {IoMdClose} from "react-icons/io"

const Footer = () => {
    const [clicked,setClick]=useState(false);
    const handleClick = () => {
        setClick(!clicked); 
    
      };
  return (
    <>
    {!clicked && 
   <FooterContainer>
    <div className="title">Get In Touch</div>
    <div className="description">I love to connect with people, whether you wanna offer me an opportunity, collab with me, or just want to have a chat, I'm just one click away </div>
    <Button onClick={handleClick} >Say Hi!</Button>
    <p>Made by <a href="" target="_blank" >Nitish Kumar Jha</a></p>
   </FooterContainer>
   }
  {clicked && <ContactContainer>
   <div className="heading">
    <div className='contactme' ><AiOutlineMail /> Contact Me</div>
    <IoMdClose className='closebtn' onClick={handleClick}/>
   </div>
   <div className='desc'>Hello, Whats your email address?</div>
   <input type="text" className="field" />
   <div className='desc'>Please leave a message below?</div>
   <textarea className='field' />
   <SendButton>Send</SendButton>
   </ContactContainer> }
   </>
  )
}

export default Footer;
 
const ContactContainer=styled.div`
padding:50px 10%;
background:#112240;
${'' /* text-align:center; */}
border-top-left-radius:50px;
border-top-right-radius:50px;
font-family:"Poppins";
min-height:60vh;

.heading{
    display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
  .closebtn{
    color:#00ffff;
    font-size:40px;
    cursor:pointer;
  }
  .contactme{
    display:flex;
  font-size: 40px;
  column-gap:10px;
    font-weight: bolder;
    align-items:center;

    svg{
        color:#00ffff;
    }
  }


}
.desc{
font-size:18px;
margin-bottom:10px;
    @media screen and (max-width:1000px) {
        font-size:15px;
    }
}
.field{
    border:2px solid  #00ffff;
    padding:10px;
    background:inherit;
    border-radius:10px;
    margin-bottom:20px;
    font-size:17px;
    color:white;

    @media screen and (max-width:1000px){
        font-size:15px;
    }

}

textarea{
    width:100%;
}
`
const FooterContainer=styled.div` 
text-align:center;
padding:50px 10%;
background:#112240;
border-top-left-radius:50px;
border-top-right-radius:50px;
font-family:"Poppins";
height:60vh;
.title{
    font-size: 60px;
    font-weight: bolder;
    margin:30px 0;
}
.description{
    font-size:17px;
    @media screen and (max-width:1000px) {
        font-size:15px;
    }
}

a{
    text-decoration:none;
    color:red;
}

`

const Button = styled.button`
  font-size: 20px;
  padding: 15px 20px;
  align-self: flex-start;
  margin: 30px 0;

  background: none;
  color: #00ffff;
  border: 1px solid #00ffff;
  border-radius:10px;
  transition:0.6s ease-in-out;
  &:hover {
   background:#00ffff;
   color:black;
    ${'' /* transform: scale(1.1); */}
   
  }

`;

const SendButton=styled.button`
    color:white;
    background:#0a192f;
  padding:10px 20px;
  border-radius:10px;
  border:1px solid #00ffff;
  letter-spacing:2px;
  font-size:18px;
`