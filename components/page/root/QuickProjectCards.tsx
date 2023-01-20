import styled from "styled-components";

export default function QuickProjectCards() {
  return (
    <QuickProjects>
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
      <h1>Project</h1>
      <img src="http://fakeimg.pl/300?font=lobster" alt="" />
    </Card>
  );
}

const QuickProjects = styled.div`
  display: flex;
  gap: 2.5rem;

  overflow-x: hidden;
`;
const Card = styled.div`
  background-color: wheat;
  padding: 1rem;
  border-radius: 1rem;
`;
