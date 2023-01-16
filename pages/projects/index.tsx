import Button from "@/components/resuseable/Button";
import { fonts } from "@/styles/styleConstants";
import {
  IconBrandGithub,
  IconCodeDots,
  IconSortAscending,
} from "@tabler/icons";
import Head from "next/head";
import styled from "styled-components";

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

        <ProjectCardHolder>
          <ProjectCard
            imgSrc="https://dummyimage.com/500x400"
            title="Exercitation Eiusmod"
            description="Pariatur fugiat ut nisi magna excepteur non aliquip mollit Lorem mollit labore."
          />
          <ProjectCard
            imgSrc="https://dummyimage.com/500x505"
            title="Title Nisi Est"
            description="Lorem laboris dolore culpa pariatur sit occaecat aliqua nisi proident occaecat incididunt in qui ut."
          />
          <ProjectCard
            imgSrc="https://dummyimage.com/500x430"
            title="Laboris Eiusmod"
            description="Consectetur est amet non anim eiusmod pariatur minim non."
          />
          <ProjectCard
            imgSrc="https://dummyimage.com/500x530"
            title="Veniam Pariatur"
            description="Veniam commodo nulla nisi tempor deserunt esse ullamco proident occaecat pariatur aliqua sint magna."
          />
          <ProjectCard
            imgSrc="https://dummyimage.com/500x505"
            title="Project Eiusmod"
            description="Mollit do nostrud et eiusmod nisi laboris."
          />
          <ProjectCard
            imgSrc="https://dummyimage.com/500x430"
            title="Mollit Eiusmod"
            description="Exercitation nisi excepteur dolor laborum nisi."
          />
        </ProjectCardHolder>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 60vh;
  background-color: #c7dadf;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectCardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  padding: 2rem 4rem;
`;

function ProjectCard({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardImage src={imgSrc} alt="" />

      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

const Card = styled.div``;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
`;

const CardTitle = styled.div`
  font-size: 2rem;
  font-family: ${fonts.serifMain};
  font-weight: 600;
`;

const CardDescription = styled.div`
  font-size: 1rem;
  font-family: ${fonts.sansSerifMain};
`;
