import Head from "next/head";
import styled from "styled-components";
import { IconArrowRight } from "@tabler/icons";
import Hero from "@/components/page/root/Hero";
import Link from "next/link";
import { colors, fonts } from "@/styles/styleConstants";

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
            title="Enim magna"
            description="Excepteur irure magna anim laborum laborum Lorem officia ex incididunt reprehenderit deserunt."
            route="/projects"
          />
          <QuickNavElement
            title="Ipsum ut"
            description="Laboris elit est do qui ad proident laborum irure et duis ea velit."
            route="/projects"
          />
          <QuickNavElement
            title="Proident cillum"
            description="Fugiat sint nisi ipsum laboris ipsum voluptate velit consectetur non eiusmod sit deserunt excepteur."
            route="/projects"
          />
          <QuickNavElement
            title="Non velit ex"
            description="Fugiat dolor esse cillum nisi consequat minim sint laborum Lorem."
            route="/projects"
          />
        </QuickNav>
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

  a {
    text-decoration: none;
  }
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

const StyledLink = styled(Link)`
  font-family: ${fonts.sansSerifMain};

  color: ${colors.nearBlack};

  padding: 1rem;
  
  border: 2px solid transparent;
    border-radius: 1rem;

  transition: 0.1s ease border;

  &:hover {
  border: 2px solid black;
  transition: 0.5s ease border;
  }
`;

const RouteTitle = styled.div`
  font-weight: 600;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 0.5rem;
`;

const RouteDescription = styled.div`
  font-size: 1rem;
`;
