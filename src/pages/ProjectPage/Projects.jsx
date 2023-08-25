import { ProjectCard } from "../../components/projectCard/ProjectCard";
import "./Projects.css";
import { Container, Left } from "./Projects.styled";
import pidpal from "../../images/pidpal.png";

export const ProjectsPage = () => {
  return (
    <Container>
      <ProjectCard
        title={"PidPal"}
        img={pidpal}
        alt={"pidpal"}
        description={"Lorem"}
      />
      <Left>
        <ProjectCard
          title={"PidPal"}
          img={pidpal}
          alt={"pidpal"}
          description={"Lorem"}
        />
      </Left>
      <ProjectCard
        title={"PidPal"}
        img={pidpal}
        alt={"pidpal"}
        description={"Lorem"}
      />
      <Left>
        <ProjectCard
          title={"PidPal"}
          img={pidpal}
          alt={"pidpal"}
          description={"Lorem"}
        />
      </Left>
    </Container>
  );
};
