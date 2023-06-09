import { Box, Spoiler, Text, Timeline } from "@mantine/core";
import encodingo from "../assets/images/encodingo.jpeg";
import weblogo from "../assets/images/weblogo.png";
import styled from "styled-components";
import { useMediaQuery } from "@mantine/hooks";

const Experience = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <Wrapper>
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
        <h1 size={28}>Work Experience</h1>
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
                maxHeight={isMobile ? 70 : 90}
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
                maxHeight={isMobile ? 70 : 90}
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
  .description {
    color: white;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }

  .title {
    font-size: 20px;
    font-family: "Libre Baskerville", serif;

    @media screen and (max-width: 960px) {
      font-size: 18px;
    }
  }
  .company {
    color: grey;
    font-size: 18px;
    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }
`;
