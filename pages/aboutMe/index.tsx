import Button from "@/components/resuseable/button";
import { IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons";
import Head from "next/head";
import styled from "styled-components";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me | Alex Keo</title>
      </Head>
      <main>
        <Hero>
          <Button isDark isMain>
            LinkedIn <IconBrandLinkedin />
          </Button>
          <Button isDark isMain={false}>
            Email
            <IconMail/>
          </Button>
          <Button isDark isMain={false}>
            Phone
            <IconPhone/>
          </Button>
        </Hero>

        <PageSection>
          <img src="https://dummyimage.com/400x400.gif" alt="" />

          <div>
            My name is Alex Keo and I am currently a senior at the University of
            North Florida studying computer science. I am currently working to
            become a full stack software engineer through engaging in projects,
            collaborating on coursework, and gaining practical experience
            through internships.
          </div>
        </PageSection>

        <PageSection>
          <div>
            I have a strong background in various programming languages,
            including React.js, Java, JavaScript, PostgreSQL, MySQL, and Python.
            I am particularly skilled in using React.js for building user
            interfaces and have experience with using Java and JavaScript for
            building both front-end and back-end applications. Additionally, I
            have experience working with databases such as PostgreSQL and MySQL,
            as well as using Python for data analysis and machine learning
            projects.
          </div>
          <img src="https://dummyimage.com/400x400.gif" alt="" />
        </PageSection>

        {/* <div>
        I am always seeking opportunities to enhance my skills and knowledge, be it through coursework or internships. I have previously gained experience through an internship at Walmart where I learned
        </div> */}

        <PageSection>
          <img src="https://dummyimage.com/400x400.gif" alt="" />

          <div>
            When I am not programming, I make use of my free time to travel and
            explore new places. I have visited several states on the East Coast
            of the United States and I am eager to discover what other
            destinations the world has to offer.
          </div>
        </PageSection>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 90vh;
  background-color: #adb8bc;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageSection = styled.div`
  margin: 4rem 8rem;

  display: flex;
  gap: 2rem;
  align-items: center;

  div {
    font-size: 1.25rem;
  }
`;
