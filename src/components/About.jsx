import React from 'react'
import styled from "styled-components"
import aboutgif from "../assets/images/about.gif"

const About = () => {
  return (
    <Wrapper>
  <h1>About me </h1>
  <AboutContainer>
    <AboutText>
    Hi, I'm Nitish Kumar Jha, a passionate and dedicated Full Stack Web Developer with a strong foundation in front-end and back-end technologies. My journey in web development began during my <span> Bachelor's in Technology (IT) at Guru Gobind Singh Indraprastha University</span>. Since then, I have been exploring and honing my skills to create impactful and user-friendly web applications.
    <br></br>
    I thrive on writing clean and efficient code, and I'm constantly learning and keeping up with the latest industry trends. With a keen eye for design and attention to detail, I strive to deliver high-quality solutions that provide a seamless user experience. I enjoy tackling complex problems and have developed strong problem-solving skills that enable me to overcome challenges and find innovative solutions.
    </AboutText>
    <GifContainer>
   <img src={aboutgif} alt="aboutme" />   
    </GifContainer>
  </AboutContainer>
  </Wrapper>
  )
}

export default About

const Wrapper =styled.div`
 padding-top:100px;
padding-bottom:50px;
@media screen and (max-width:960px){
text-align:center;
}
`

const AboutContainer=styled.div`
  display:flex;
  @media screen and (max-width:960px){
  flex-direction:column-reverse;
 
}

`
const AboutText=styled.div`
font-size:18px;
width:60%;
text-align:justify;
span{
    color:red;
}
@media screen and (max-width:960px){
  font-size:15px;
  width:100%;
}
`
const GifContainer=styled.div`
width:40%;

img{
max-width:80%;
max-height:100%;
margin-top:-5%;
object-fit: contain;
}

@media screen and (max-width:960px){
  width:100%;
  display:flex;
  justify-content:center;
  img{
   max-width:50%;
  
  }
}
`