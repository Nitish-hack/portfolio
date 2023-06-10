import styled from "styled-components";

const ProjectCard = ({ title, description, image, tech, github, website }) => {
  return (
    <CardContainer>
      <ImageContainer></ImageContainer>
      <ContentContainer>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="stack">
          {tech.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </ContentContainer>
    </CardContainer>
  );
};

export default ProjectCard;

const CardContainer = styled.div``;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  row-gap: 20px;
  .title {
    font-size: 20px;
    font-family: "Libre Baskerville", serif;

    @media screen and (max-width: 960px) {
      font-size: 18px;
    }
  }

  .description {
    color: white;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    background: red;
    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }

  .stack {
    display: flex;
    justify-content: flex-end;
    column-gap: 10px;
  }
`;
const ImageContainer = styled.div``;
