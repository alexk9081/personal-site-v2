import { colors, fonts } from "@/styles/styleConstants";
import styled from "styled-components";

export default function QuickCards() {
  return (
    <QuickProjects>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </QuickProjects>
  );
}

function ProjectCard() {
  return (
    <Card>
      <CardImageHolder>
        <CardImage src="http://fakeimg.pl/300?font=lobster" alt="" />
      </CardImageHolder>
      <CardText>Project</CardText>
    </Card>
  );
}

const QuickProjects = styled.div`
  display: flex;
  gap: 2.5rem;

  padding: 2rem 0;

  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x proximity;
  /* scroll-padding: 8rem; */
  /* scroll-margin-inline-start: 8rem; */

  &::-webkit-scrollbar {
    display: none;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`;

const CardImageHolder = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const CardImage = styled.img`
  width: 300px;
  height: 300px;

  transition: 0.3s ease all;
`;

const CardText = styled.div`
  margin: 1rem;

  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const Card = styled.div`
  background-color: ${colors.darkWhite};
  color: ${colors.nearBlack};

  margin-right: -20rem;

  box-shadow: 0.5rem 0.5rem 2rem ${colors.translucentLightBlack};

  padding: 1rem;
  border-radius: 1rem;

  font-family: ${fonts.sansSerifMain};

  scroll-snap-align: start;

  transition: 0.1s ease all;

  &:hover {
    cursor: pointer;
    margin: 0;

    ${CardImage} {
      width: 350px;
      height: 350px;
    }
  }
`;
