import Button from "@/components/resuseable/Button";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero>
          <HeroElements>
            <HeroText>
              <div>
                <HeroName>Alex Keo</HeroName>
                <HeroTitle>Full Stack Software Engineer</HeroTitle>
              </div>
              <div>
                <HeroCTA>Recruiter?</HeroCTA>
                <HeroButtonHolder>
                  <Button isMain={true}>Resume</Button>
                  <Button isMain={false}>Portfolio</Button>
                </HeroButtonHolder>
              </div>
            </HeroText>
            <img src="https://dummyimage.com/500x500" alt="" />
          </HeroElements>
        </Hero>

        <Title>This is the home page</Title>

        <Info>
          <img src="https://dummyimage.com/400x400" alt="" />
        </Info>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 90vh;
  background-color: white;

  box-shadow: 0rem 0.25rem 1rem 0.5rem rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroElements = styled.div`
  display: flex;
  gap: 10rem;
`;

const HeroText = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const HeroName = styled.div`
  font-weight: 600;
  font-size: 3rem;
`;

const HeroTitle = styled.div``;

const HeroCTA = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const HeroButtonHolder = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeroImg = styled.img``;

const Title = styled.h1``;

const Info = styled.div``;
