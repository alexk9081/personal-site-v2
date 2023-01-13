import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  background-color: white;
`;

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}
