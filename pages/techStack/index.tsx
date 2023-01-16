import { fonts } from "@/styles/styleConstants";
import Head from "next/head";
import { Component } from "react";
import styled from "styled-components";

export default function TechStack() {
  return (
    <>
      <Head>
        <title>Tech Stack | Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>

        <StackSection title="Frontend">
          <SectionCard name="React" />
          <SectionCard name="Next" />
          <SectionCard name="Javascript" />
        </StackSection>
        <StackSection title="Backend">
          <SectionCard name="Java" />
          <SectionCard name="Python" />
        </StackSection>
        <StackSection title="Database">
          <SectionCard name="MySQL" />
          <SectionCard name="PosgreSQL" />
        </StackSection>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 60vh;
  background-color: #b8ced6;
`;

function StackSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionCards>{children}</SectionCards>
    </Section>
  );
}

const Section = styled.div`
  margin: 4rem 2rem;
`;

const SectionTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  font-family: ${fonts.serifMain};

  margin: 0.5rem 0rem;
`;

const SectionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;

function SectionCard({ name }: { name: string }) {
  return (
    <div>
      <SectionCardImg src="https://dummyimage.com/1600x900" />
      <SectionCardName>{name}</SectionCardName>
    </div>
  );
}

const SectionCardImg = styled.img`
  width: 100%;
`;
const SectionCardName = styled.div`
  text-align: center;
  font-size: 1rem;
  font-family: ${fonts.sansSerifMain};
`;
