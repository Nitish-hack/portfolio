import { Box, Spoiler, Text, Timeline } from "@mantine/core";
import encodingo from "../assets/images/encodingo.jpeg";
import weblogo from "../assets/images/weblogo.png";
import computer from "../assets/images/computer.png";
import styled from "styled-components";
import { useMediaQuery } from "@mantine/hooks";
const Experience = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
   
    <Wrapper id="experience">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1.5rem",
          margin: "4rem 0",
        }}
      >
        <h1>Work Experience</h1>
        <Timeline active={0} className="timeline" bulletSize={40} lineWidth={3}>
        
          <Timeline.Item
            pb={30}
            active={true}
            color="pink"
            bullet={
              <img
                src={encodingo}
                alt="Encodingo"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                }}
              />
            }
            title={
              <Text className="title" ml={10} color="white">
                Full Stack Web Developer
              </Text>
            }
          >
            <Text ml={10}>
              <Spoiler
                maxHeight={isMobile ? 70 : 80}
                className="description"
                showLabel="Show more"
                hideLabel="Hide"
              >
                Worked as Backend and ReactJS developer Intern.
                <br />
                Worked on the backend and created REST API to fetch data from
                the database.
                <br />
                Built full-fledged authentication system using NodeJS,
                ExpressJS, MongoDB, and JWT.
                <br />
                Built admin panel using React and Material UI.
                <br />
                Solved bugs related to frontend
              </Spoiler>
            </Text>
            <Text mt={4} ml={10} className="company">
              Encodingo
            </Text>
          </Timeline.Item>
          <Timeline.Item
            pb={30}
            bullet={
              <img
                src={weblogo}
                alt="open source"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                }}
              />
            }
            title={
              <Text className="title" size="lg" color="white" ml={10}>
              Open Source Contributor
              </Text>
            }
          >
            <Text size="md" ml={10}>
              <Spoiler
                 maxHeight={isMobile ? 70 : 80}
                showLabel="Show more"
                hideLabel="Hide"
                className="description"
              >
                Participated in GSSOC'23 (Girl Script Summer of Code) 
                <br />
              Contributed to various websites using technologies such as React, Node.js, Express, and MongoDB
                <br />
                Made significant contributions in the development and enhancement of web applications.
        
             
              </Spoiler>
            </Text>
            <Text mt={4} ml={10} className="company">
              GSSOC
            </Text>
          </Timeline.Item>
          <Timeline.Item
            pb={30}
            bullet={
              <img
                src={computer}
                alt="Benoffe"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                }}
              />
            }
            title={
              <Text className="title" size="lg" color="white" ml={10}>
                Full Stack Web Developer
              </Text>
            }
          >
            <Text size="md" ml={10}>
              <Spoiler
                 maxHeight={isMobile ? 70 : 80}
                showLabel="Show more"
                hideLabel="Hide"
                className="description"
              >
                Worked as Backend and ReactJS developer Intern.
                <br />
                Designed and Developed the front-end of the website using React
                , Tailwind CSS and Material UI.
                <br />
                Built full-fledged authentication system using NodeJS,
                ExpressJS, MongoDB, and JWT.
                <br />
                Implemented Razorpay Payment Gateway to accept payments from
                clients.
                <br />
                Developed Light Weight UI and Complex Animations using Tailwind
                CSS and Material UI.
              </Spoiler>
            </Text>
            <Text mt={4} ml={10} className="company">
              Benoffe
            </Text>
          </Timeline.Item>
       
        </Timeline>
      </Box>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled.div`
h1{
  color:#ccd6f6;
}
  .description {
   
    font-size: 17px;
    color: #d7d7d7;
    font-family: "Poppins", sans-serif;
    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }

  .title {
    font-size: 20px;
    font-family: "Libre Baskerville", serif;
    color:#d9e8ff;
    @media screen and (max-width: 1000px) {
      font-size: 17px;
    }
  }
  .company {
    color: grey;
    font-size: 17px;
    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }
`;
