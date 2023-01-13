import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1``;

const Hero = styled.div`
  height: 90vh;
  background-color: white;
`;

const Info = styled.div`
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>

        <Title>This is the home page</Title>

        <Info>
          <img src='https://dummyimage.com/400x400.gif' alt=''/>
        </Info>
      </main>
    </>
  );
}
