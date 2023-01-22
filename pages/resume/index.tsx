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

        <ResumeImg src="https://dummyimage.com/900x1600" alt="" />
        <TextResume>
          <iframe
            src="http://docs.google.com/gview?url=https://arxiv.org/pdf/2003.07441.pdf&embedded=true"
            style={{ width: "600px", height: "500px", border: "none" }}
          ></iframe>
        </TextResume>
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

const TextResume = styled.div``;
