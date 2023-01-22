import Head from "next/head";
import Hero from "@/components/page/root/Hero";
import QuickNavigation from "@/components/page/root/QuickNavigation";
import QuickPersonalInfo from "@/components/page/root/QuickPersonalInfo";
import styled from "styled-components";
import QuickCards from "@/components/page/root/QuickCards";
import ChangingSectionInfo from "@/components/page/root/ChangingSectionInfo";
import { fonts } from "@/styles/styleConstants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero />

        <MainContent>
          <SubHero>
            <h1>This is the big title</h1>
            <p> this is the smaller text describing something</p>
            <img src="http://fakeimg.pl/1000x500?font=museo" alt="" />
          </SubHero>

          <QuickPersonalInfo />

          <ChangingSectionInfo />

          <QuickNavigation />

          <QuickCards />
        </MainContent>
      </main>
    </>
  );
}

const SubHero = styled.div`
  font-family: ${fonts.sansSerifMain};
  text-align: center;
`;


const MainContent = styled.div`
  margin: 4rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
