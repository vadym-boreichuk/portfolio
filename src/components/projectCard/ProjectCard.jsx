import { Description, ImageBox, Thumb, Title } from "./ProjectCard.styled";
import pidpal from "../../images/pidpal.png";

export const ProjectCard = ({ title, img, alt, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Thumb>
        <ImageBox>
          <img srcSet={`${img}`} width="300px" alt={`${alt}`} />
        </ImageBox>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          repellendus hic doloribus quas est nisi sit numquam, esse, magni quo
          rerum odit voluptas laudantium porro consectetur ex nobis voluptatem
          corrupti.{description}
        </Description>
      </Thumb>
    </>
  );
};
