import Button from "@/components/resuseable/Button";
import { IconArrowDown } from "@tabler/icons";
import Head from "next/head";
import styled from "styled-components";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Alex Keo</title>
      </Head>
      <main>
        <Hero>
          <Button isMain={true} isDark={true}>
            Download Resume
          </Button>
          <Button isMain={false} isDark={true}>
            Quick View
            <IconArrowDown size={"1rem"} />
          </Button>
        </Hero>

        <ResumeImg src='https://dummyimage.com/900x1600' alt=''/>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 60vh;
  background-color: #9fbcc6;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResumeImg = styled.img`
  width: 500px;
`;