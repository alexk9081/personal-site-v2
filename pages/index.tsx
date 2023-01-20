import Head from "next/head";
import Hero from "@/components/page/root/Hero";
import QuickNavigation from "@/components/page/root/QuickNavigation";
import QuickPersonalInfo from "@/components/page/root/QuickPersonalInfo";
import QuickProjectCards from "@/components/page/root/QuickProjectCards";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero />

        <MainContent>
          <QuickNavigation />

          <QuickPersonalInfo />

          <QuickProjectCards />
        </MainContent>
      </main>
    </>
  );
}

const MainContent = styled.div`
  margin: 4rem;
`;
