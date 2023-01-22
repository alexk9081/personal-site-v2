import Button from "@/components/resuseable/Button";
import Tag from "@/components/resuseable/Tag";
import { fonts } from "@/styles/styleConstants";
import {
  IconBrandGithub,
  IconCodeDots,
  IconFilter,
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
          <span>
            Filter
            <IconFilter />
          </span>
          <span>
            Sort
            <IconSortAscending />
          </span>
        </div>

        <ProjectCardHolder>
          <ProjectCard
            imgSrc={[
              "https://dummyimage.com/700x900",
              "https://dummyimage.com/507x400",
              "https://dummyimage.com/500x970",
              "https://dummyimage.com/970x400",
            ]}
            title="Exercitation Eiusmod"
            description="Pariatur fugiat ut nisi magna excepteur non aliquip mollit Lorem mollit labore."
            tags={[<Tag color="red">React</Tag>, <Tag color="blue">Java</Tag>]}
          />
          <ProjectCard
            imgSrc={["https://dummyimage.com/500x505"]}
            title="Title Nisi Est"
            description="Lorem laboris dolore culpa pariatur sit occaecat aliqua nisi proident occaecat incididunt in qui ut."
            tags={[<Tag color="red">React</Tag>, <Tag color="blue">Java</Tag>]}
          />
          <ProjectCard
            imgSrc={["https://dummyimage.com/500x430"]}
            title="Laboris Eiusmod"
            description="Consectetur est amet non anim eiusmod pariatur minim non."
            tags={[<Tag color="red">React</Tag>, <Tag color="blue">Java</Tag>]}
          />
          <ProjectCard
            imgSrc={["https://dummyimage.com/500x530"]}
            title="Veniam Pariatur"
            description="Veniam commodo nulla nisi tempor deserunt esse ullamco proident occaecat pariatur aliqua sint magna."
            tags={[<Tag color="red">React</Tag>, <Tag color="blue">Java</Tag>]}
          />
          <ProjectCard
            imgSrc={["https://dummyimage.com/500x505"]}
            title="Project Eiusmod"
            description="Mollit do nostrud et eiusmod nisi laboris."
            tags={[<Tag color="red">React</Tag>, <Tag color="blue">Java</Tag>]}
          />
          <ProjectCard
            imgSrc={["https://dummyimage.com/500x430"]}
            title="Mollit Eiusmod"
            description="Exercitation nisi excepteur dolor laborum nisi."
            tags={[<Tag color="red">React</Tag>, <Tag color="blue">Java</Tag>]}
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
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;

  padding: 2rem 4rem;
`;

function ProjectCard({
  imgSrc,
  title,
  description,
  tags,
}: {
  imgSrc: string[];
  title: string;
  description: string;
  tags: React.ReactElement[];
}) {
  return (
    <Card>
      <CardImages>
        {imgSrc.map((src) => (
          <CardImage src={src} alt="" key={src} />
        ))}
      </CardImages>

      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {tags}
      <IconCodeDots />
    </Card>
  );
}

const Card = styled.div`
  padding: 2rem;
`;

const CardImages = styled.div`
  display: flex;
  gap: 1rem;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      #ffff 80%
    ); /* W3C */
  }
`;
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
// background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6+ */
// background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.65)), color-stop(100%,rgba(0,0,0,0))); /* Chrome,Safari4+ */
// background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10+,Safari5.1+ */
// background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Opera 11.10+ */
// background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* IE10+ */

const CardImage = styled.img`
  /* width: 100%; */
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
