
import React from 'react'
import { styled } from 'styled-components';
import Typewriter from "typewriter-effect"
import heroimg from "../assets/images/hero.png"

const Hero = () => {
    return (
        <Wrapper>
            <HeroContainer>
                <p className='greeting'>Hi,my name is</p>
                <div className="title">Nitish Kumar Jha</div>
                <div className="profession">
                    I'm a&nbsp;
                    <Typewriter
                        options={{
                            autoStart: true, loop: true, delay: 40,
                            strings: [
                                " Web Developer",
                                " Tech Enthusiast",
                                " Engineering Student"
                            ]

                        }}
                    />
                </div>

                <div className='text' >
                    I'm person, who has a keen interest in writing clean code, building new things from scratch, or tinkering with web in general . Currently, I'm focused on building handy applications using technologies .
                </div>


                <Button>Read more about me</Button>


            </HeroContainer>
            <ImageContainer>
                <img src={heroimg} alt="hero" />
            </ImageContainer>
        </Wrapper>
    )
}

export default Hero;

const Wrapper = styled.div`
        display:flex;
        flex-direction:row;
        height:90vh;
        width:100%;
        @media screen and (max-width:1140px){
        flex-direction:column-reverse;
        align-items:center;
        height:auto;
        row-gap:50px;
        padding-bottom:50px;
        
     }
       
        `
const ImageContainer = styled.div`
width:40%;;
height:100%;
align-items:center;
display:flex;


    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        ${'' /* align-self:flex-end; */}
        border-bottom-left-radius:40%;
        border-bottom-right-radius:30%;

    }
    @media screen and (max-width:1140px){
        width:100%;
        justify-content:center;

       img{
        width:50%;
       }
     }
   
`

const HeroContainer = styled.div`
            width:60%;;
            display:flex;
            justify-content:center;
            flex-direction:column;
          
            ${'' /* letter-spacing:5px; */}
            .greeting{
                font-size:20px;
                color:#00FFFF;
            }
            .title{
             font-size:70px;
             font-weight:bolder;
            }
            .profession{
                font-size:50px;
                margin-bottom:10px;
                display:flex;
        
                span{
                    color:#00FFFF;
                    font-family: 'Libre Baskerville', serif;
        
                }
            }
               .text{
                width:80%;
                line-height:1.5;
                font-size:20px;
               }


               @media screen and (max-width:1140px){
        width:100%;
        text-align:center;
       align-items:center;
     }
               @media screen and (max-width:730px){
       .title{
        font-size:40px;
       }
       .greeting,.text , button{
        font-size:15px;
       }
       .profession{
        font-size:30px;
       }
       
         }

         @media screen and (max-width:500px){
       .title{
        font-size:40px;
       }
       .greeting,.text , button{
        font-size:15px;
       }
       .profession{
        font-size:20px;
       }
       
         }

            `


const Button = styled.button`
            font-size:20px;
            padding:15px 20px;;
            align-self:flex-start;
            margin-top:30px;
            
            background:none;
            color:#00FFFF;
            border:1px solid #00FFFF;
         &:hover{
           
        box-shadow: 0px 0px 40px 0px rgba(0,255,255,1);
        transform:scale(1.1);
        margin-left:10px;
        }
        @media screen and (max-width:1140px){      
       align-self:center;
     }
            
            `