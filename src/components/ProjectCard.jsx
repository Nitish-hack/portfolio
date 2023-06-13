import styled from "styled-components";

const ProjectCard = ({ title, description, thumbnail, tech, github, website }) => {
  return (
    <CardContainer>
      <ImageContainer>
      <img src={thumbnail} alt="project-img" />
      </ImageContainer>
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

const CardContainer = styled.div`

display:flex;

@media screen and (max-width:800px){
  flex-direction:column;
  background:#112240;
}
`;
const ContentContainer = styled.div`
  display: flex;
  padding-left:20px;
  flex-direction: column;
  text-align: right;
  width:50%;
  row-gap: 15px;
  .title {
    font-size: 20px;
    letter-spacing:2px;
    font-family: "Libre Baskerville", serif;

    @media screen and (max-width: 1000px) {
      font-size: 17px;
    }
  }

  .description {
    padding:10px;
    background:#112240;
    color: white;
    font-size: 17px;
    font-family: "Poppins", sans-serif;
 
    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }

  .stack {
    display: flex;
     flex-wrap:wrap;
     justify-content: flex-end;
    column-gap: 10px;
    row-gap:5px;

  p{
    background:#112240;
    padding:5px 10px ;
    border-radius:10px;
    white-space:nowrap;

  }
  }

  .links{
    display:flex;
    column-gap:10px;
    justify-content: flex-end;
    a{
      text-decoration:none;
      color:white;
      background:#112240;
    padding:2px 10px ;
    border-radius:15px;
    border:1px solid #00ffff;
    letter-spacing:2px;
    font-size:17px;
    }
  }

  @media screen and (max-width:800px){
 width:100%;
 text-align:left;
padding:10px 0;
.description{
  padding:0;
}
padding-left:20px;

.stack, .links{
justify-content:flex-start;
}
.links{
  margin-left:4px;
}
.stack p{
  background:#0a192f;
}

}
`;
const ImageContainer = styled.div`
width:50%;
img{
  width:100%;
  height:100%;
}

@media screen and (max-width:800px){
 width:100%;

 img{
  height:auto;
 }
}

`;
