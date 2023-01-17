import Head from "next/head";
import styled from "styled-components";
import { IconArrowRight } from "@tabler/icons";
import Hero from "@/components/page/root/Hero";
import Link from "next/link";
import { colors, fonts } from "@/styles/styleConstants";
import Tag from "@/components/resuseable/Tag";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero />

        <QuickNav>
          <QuickNavElement
            title="Projects"
            description="Explore the projects I have developed which showcase my abilities.
            Take a look at the underlying code that brought these projects to life, including the one you are looking at right now"
            route="/projects"
          />
          <QuickNavElement
            title="About Me"
            description="Learn more about me, my path as a software engineer, and my hobbies and interests during my free time."
            route="/projects"
          />
          <QuickNavElement
            title="Resume"
            description="Take a quick look at my resume or download it to share with other recruiters or human resources."
            route="/projects"
          />
          <QuickNavElement
            title="Tech Stack"
            description="Take a look at the tech stack I use and the projects I have developed utilizing them."
            route="/projects"
          />
        </QuickNav>
        <QuickInfo>
          <QuickInfoText>
            Qui aliquip anim laboris amet irure occaecat eu. Exercitation
            eiusmod tempor labore do tempor consequat. Irure cillum elit
            deserunt enim irure cillum laboris cillum voluptate. Non adipisicing
            pariatur occaecat id veniam deserunt mollit velit officia. Pariatur
            sunt dolore labore est id non proident aute incididunt.
          </QuickInfoText>
          <QuickInfoSelections>
            <div>Phone</div>
            <div>Email</div>
            <Tag color="wheat">React</Tag>
            <Tag color="cyan">Java</Tag>
          </QuickInfoSelections>
        </QuickInfo>
      </main>
    </>
  );
}

const QuickNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  padding: 2rem 4rem;
  gap: 3rem;
`;

const QuickInfo = styled.div`
  display: grid;
  grid-template-columns: 70% 20%;
  margin: 1rem;

  justify-content: space-evenly;

  font-family: ${fonts.sansSerifMain};
`;

const QuickInfoText = styled.div`
  background-color: darkslategray;

  color: ${colors.nearWhite};

  padding: 1rem;

  border-radius: 1rem;
`;

const QuickInfoSelections = styled.div`
  background-color: darkslateblue;

  color: ${colors.nearWhite};

  padding: 1rem;

  border-radius: 1rem;
`;

const Circle = styled.span`
  display: inline-block;
  height: 0.75rem;
  width: 0.75rem;

  border-radius: 50%;

  background-color: ${({ color }: { color: string }) => color};
`;

function QuickNavElement({
  title,
  description,
  route,
}: {
  title: string;
  description: string;
  route: string;
}) {
  return (
    <StyledLink href={route}>
      <RouteTitle>
        {title}
        <IconArrowRight />
      </RouteTitle>
      <RouteDescription>{description}</RouteDescription>
    </StyledLink>
  );
}

const RouteTitle = styled.div`
  font-weight: 600;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  font-family: ${fonts.sansSerifMain};

  color: ${colors.nearBlack};

  padding: 1rem;

  border: 2px solid transparent;
  border-radius: 1rem;

  transition: 0.1s ease border;

  text-decoration: none;

  &:hover {
    border: 2px solid black;
    transition: 0.5s ease border;

    & svg {
      transform: translateX(0.25rem);
    }
  }

  & svg {
    transition: 0.1s ease all;
  }
`;

const RouteDescription = styled.div`
  font-size: 1rem;
`;
