import Button from "@/components/resuseable/button";
import { IconBrandGithub, IconCodeDots, IconLine, IconSort90, IconSortAscending, IconSortAscending2, IconSortAscendingLetters, IconStack } from "@tabler/icons";
import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  background-color: #c7dadf;

  display:flex;
  justify-content: center;
  align-items: center;
`;

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Alex Keo</title>
      </Head>
      <main>
        <Hero>
          <Button isMain isDark>
            GitHub
            <IconBrandGithub />
          </Button>
        </Hero>

        <div>
          Sort
          <IconSortAscending />
        </div>

        <div>
          <div>TItle</div>
          <div>Desc</div>
          <IconCodeDots />
          
        </div>

      </main>
    </>
  );
}