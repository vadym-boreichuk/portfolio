import { Description, ImageBox, Thumb, Title } from "./ProjectCard.styled";
import pidpal from "../../images/pidpal.png";
import "./ProjectCard.css";

export const ProjectCard = ({ title, img, alt, description, link, linkgh }) => {
  return (
    <Thumb className="box">
      <Title>{title}</Title>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImageBox>
          <img srcSet={`${img}`} width="600" alt={`${alt}`} />
        </ImageBox>
      </a>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        repellendus hic doloribus quas est nisi sit numquam, esse, magni quo
        rerum odit voluptas laudantium porro consectetur ex nobis voluptatem
        corrupti.{description}
      </Description>
      <a href={linkgh} target="_blank" rel="noopener noreferrer">
        <p>Link to Github</p>
      </a>
    </Thumb>
  );
};
