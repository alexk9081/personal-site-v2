import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { colors, fonts } from "@/styles/styleConstants";

export default function Header() {
  const [headerTransparent, setHeaderTransparent] = useState(true);

  useEffect(() => {
    const checkScrollHeight = () => {
      const scrollY = window.pageYOffset;
      if (headerTransparent != scrollY < 10) {
        setHeaderTransparent(scrollY < 10);
      }
    };

    window.addEventListener("scroll", checkScrollHeight); // add event listener
    return () => {
      window.removeEventListener("scroll", checkScrollHeight); // clean up
    };
  }, [headerTransparent]);

  return (
    <>
      <UpperHeader
        isTransparent={headerTransparent}
        onMouseEnter={() => setHeaderTransparent(false)}
        onMouseLeave={() => {
          if (scrollY < 10) setHeaderTransparent(true);
        }}
      >
        <Link href="/">
          <span>Alex Keo</span>
        </Link>
        <Link href="/">
          <span>Alex Keo</span>
        </Link>
      </UpperHeader>
      <LowerNav
        isHidden={headerTransparent}
        onMouseEnter={() => setHeaderTransparent(false)}
        onMouseLeave={() => {
          if (scrollY < 10) setHeaderTransparent(true);
        }}
      >
        <Link href="/projects">
          <span>Projects</span>
        </Link>
        <Link href="/aboutMe">
          <span>About Me</span>
        </Link>
        <Link href="/resume">
          <span>Resume</span>
        </Link>
        <Link href="/techStack">
          <span>Tech Stack</span>
        </Link>
      </LowerNav>
    </>
  );
}

const UpperHeader = styled.header<{ isTransparent: boolean }>`
  position: fixed;

  height: 4rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;

  color: ${colors.nearWhite};
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s ease all;
  background-color: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "transparent" : colors.translucentNearBlack};

  a {
    color: ${colors.nearWhite};
    text-decoration: none;
    font-size: 3rem;
    font-weight: 600;
  }
`;

const LowerNav = styled.nav`
  position: fixed;
  top: 4rem;

  display: flex;
  gap: 5vw;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(3px);

  width: 100%;
  height: 2.5rem; //Needs to be the same as max height below

  transition: 0.3s ease all;

  overflow: hidden;
  max-height: ${(props: { isHidden: boolean }) =>
    props.isHidden
      ? "0rem"
      : "2.5rem"}; //Change height above after changing max height

  background-color: ${(props: { isHidden: boolean }) =>
    props.isHidden ? "transparent" : colors.translucentLightBlack};

  a {
    color: ${colors.nearWhite};
    text-decoration: none;

    font-size: 1rem;
    font-weight: 600;
    font-family: ${fonts.sansSerifMain};
  }
`;
