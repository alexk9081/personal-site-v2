import styled from "styled-components";
import { fonts, colors, screen } from "@/styles/styleConstants";
import Button from "@/components/resuseable/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <MainHero>
      <HeroElements>
        <HeroText>
          <div>
            <HeroName>Alex Keo</HeroName>
            <HeroTitle>Full Stack Software Engineer</HeroTitle>
          </div>
          <div>
            <HeroCTA>Recruiter?</HeroCTA>
            <HeroButtonHolder>
              <Button isMain={true} isDark={true}>
                Resume
              </Button>
              <Button isMain={false} isDark={true}>
                Portfolio
              </Button>
            </HeroButtonHolder>
          </div>
        </HeroText>
        <HeroImg src="https://dummyimage.com/500x500" alt="" />
      </HeroElements>
    </MainHero>
  );
}

const MainHero = styled.div`
  height: 90vh;
  background-color: white;

  background: linear-gradient(rgba(20, 16, 16, 0.7), rgba(20, 16, 16, 0.7)),
    url("https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg");
  background-size: cover;
  filter: grayscale(45%);

  box-shadow: 0rem 0.25rem 1rem 0.5rem rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${screen.tablet}) {
    height: 100vh;
  }
`;

const HeroElements = styled.div`
  display: flex;
  gap: 8rem;

  @media (max-width: ${screen.tablet}) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

const HeroText = styled.div`
  padding: 0rem 6rem;

  border-radius: 2rem;

  font-family: ${fonts.sansSerifMain};

  background-color: ${colors.darkWhite};

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media (max-width: ${screen.tablet}) {
    padding: 2.5rem;
  }
`;

const HeroName = styled.div`
  font-weight: 600;
  font-size: 3rem;

  @media (max-width: ${screen.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroTitle = styled.div`
  @media (max-width: ${screen.tablet}) {
    font-size: 0.75rem;
  }
`;

const HeroCTA = styled.div`
  font-size: 1rem;
  font-weight: 600;

  margin-bottom: 0.5rem;
  margin-top: 0.75rem;
`;

const HeroButtonHolder = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeroImg = styled.img`
  border-radius: 2rem;

  @media (max-width: ${screen.tablet}) {
    width: 350px;
  }
`;
