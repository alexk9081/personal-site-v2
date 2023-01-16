import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  background-color: #9fbcc6;
`;

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}
