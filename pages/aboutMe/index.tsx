import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  background-color: white;
`;

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me | Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
        <div>
          <img src="https://dummyimage.com/400x400.gif" alt="" />
        </div>
      </main>
    </>
  );
}
