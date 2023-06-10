import styled from "styled-components";
import ProjectsData from "../Database/ProjectsData";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <Wrapper>
      <h2>Projects</h2>
      <ProjectContainer>
        {ProjectsData.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              tech={item.tech}
              github={item.github}
              website={item.website}
            />
          );
        })}
      </ProjectContainer>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div``;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
