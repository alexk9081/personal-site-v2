import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { colors, fonts } from "@/styles/styleConstants";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";
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

  //Chagne active route to be underlined
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
          <img src="logo.svg" style={{ height: "2.25rem", marginRight: "1rem", boxShadow: "0 0 0.75rem #fff6", borderRadius: "50%" }} />
          <span>Alex Keo</span>
        </Link>
        <Links>
          <Routes>
            <Link href="/projects">
              <StyledLinkText isActive={url.startsWith("/projects")}>
                Projects
              </StyledLinkText>
            </Link>
            <Link href="/aboutMe">
              <StyledLinkText isActive={url.startsWith("/aboutMe")}>
                About Me
              </StyledLinkText>
            </Link>
            <Link href="/resume">
              <StyledLinkText isActive={url.startsWith("/resume")}>
                Resume
              </StyledLinkText>
            </Link>
            <Link href="/techStack">
              <StyledLinkText isActive={url.startsWith("/techStack")}>
                Tech Stack
              </StyledLinkText>
            </Link>
          </Routes>
          <IconBrandLinkedin size={40} strokeWidth={2} />
          <IconBrandGithub size={40} strokeWidth={2} />
        </Links>
      </UpperHeader>
    </>
  );
}

const UpperHeader = styled.header<{ isTransparent: boolean }>`
  position: fixed;
  z-index: 99;

  height: 5rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;

  color: ${colors.nearWhite};

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s ease all;

  backdrop-filter: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "none" : "blur(3px)"};

  background-color: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "transparent" : colors.translucentNearBlack};

  a {
    color: ${colors.nearWhite};
    text-decoration: none;
    font-size: 2.25rem;
    font-weight: 600;
    font-family: ${fonts.serifMain};

    display: flex;
    align-items: center;
  }
`;

const StyledLinkText = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${colors.nearWhite};

  text-decoration: none;

  padding-bottom: 2px;

  border-bottom: ${(props: { isActive: boolean }) =>
    props.isActive ? `2px solid ${colors.nearWhite}` : "2px solid transparent"};

  font-size: 1.25rem;
  font-weight: 600;
  font-family: ${fonts.sansSerifMain};
`;

const Routes = styled.span`
  display: flex;

  gap: 1rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
`;
