import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  background-color: #b8ced6;
`;

export default function TechStack() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}
