import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { colors, fonts } from "@/styles/styleConstants";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const [url, setURL] = useState("");

  useEffect(() => {
    setURL(router.pathname);

    const handleRouteChange = (url: string, { shallow }: any) => {
      setURL(url);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

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
        <span>
          <IconBrandLinkedin size={40} strokeWidth={2} />
          <IconBrandGithub size={40} strokeWidth={2} />
        </span>
      </UpperHeader>
      <LowerNav
        isHidden={headerTransparent}
        onMouseEnter={() => setHeaderTransparent(false)}
        onMouseLeave={() => {
          if (scrollY < 10) setHeaderTransparent(true);
        }}
      >
        <StyledLink href="/projects" underlined={url.startsWith("/projects")}>
          <span>Projects</span>
        </StyledLink>
        <StyledLink href="/aboutMe" underlined={url.startsWith("/aboutMe")}>
          <span>About Me</span>
        </StyledLink>
        <StyledLink href="/resume" underlined={url.startsWith("/resume")}>
          <span>Resume</span>
        </StyledLink>
        <StyledLink
          href="/techStack"
          underlined={url.startsWith("/techStack")}
        >
          <span>Tech Stack</span>
        </StyledLink>
      </LowerNav>
    </>
  );
}

const UpperHeader = styled.header<{ isTransparent: boolean }>`
  position: fixed;
  z-index: 1;

  height: 5rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;

  color: ${colors.nearWhite};

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s ease all;

  box-shadow: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "none" : "inset 0rem -2rem 1rem -1rem #0004"};

  backdrop-filter: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "none" : "blur(7px)"};

  background-color: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "transparent" : colors.translucentNearBlack};

  a {
    color: ${colors.nearWhite};
    text-decoration: none;
    font-size: 2.25rem;
    font-weight: 600;
    font-family: ${fonts.serifMain};
  }
`;

const LowerNav = styled.nav`
  position: fixed;
  top: 5rem;
  z-index: 1;

  display: flex;
  gap: 5vw;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.5rem; //Needs to be the same as max height below

  backdrop-filter: blur(7px);

  transition: 0.3s ease all;

  box-shadow: inset 0rem 2rem 0.5rem -1rem #3334;

  overflow: hidden;
  max-height: ${(props: { isHidden: boolean }) =>
    props.isHidden
      ? "0rem"
      : "2.5rem"}; //Change height above after changing max height

  background-color: ${(props: { isHidden: boolean }) =>
    props.isHidden ? "transparent" : colors.translucentLightBlack};
`;

const StyledLink = styled(Link)`
  color: ${colors.nearWhite};

  text-decoration: none;

  padding-bottom: 2px;

  border-bottom: ${(props: { underlined: boolean }) =>
    props.underlined
      ? `2px solid ${colors.nearWhite}`
      : "2px solid transparent"};

  font-size: 1rem;
  font-weight: 600;
  font-family: ${fonts.sansSerifMain};
`;
