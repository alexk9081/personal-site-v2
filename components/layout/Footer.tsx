import styled from "styled-components";
import { colors, fonts } from "@/styles/styleConstants";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterSection>
        <MainInfoTitle>Alex Keo</MainInfoTitle>
      </FooterSection>
      <FooterSection>
        <Copyright>
          <span>I think you're pretty cool ☺</span>
          <span>Copyright © 2023 Alex Keo. All rights reserved.</span>
        </Copyright>
      </FooterSection>
      <FooterSection>
        <ContactInfoTitle>Contact Info</ContactInfoTitle>
        <div>
          <ContactInfoText>Phone Number</ContactInfoText>
          <ContactInfoText>Email</ContactInfoText>
        </div>
      </FooterSection>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  box-sizing: border-box;
  height: 15rem;
  width: 100%;
  padding: 2rem 4rem;

  background-color: ${colors.nearWhite};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;
`;

const MainInfoTitle = styled.div`
  font-weight: 600;
  font-family: ${fonts.serifMain};
  font-size: 2rem;
`;

const FooterSection = styled.div``;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 100%;

  transform: translateY(2rem);

  span {
    margin: 0.25rem;
    font-size: 0.75rem;
    font-family: ${fonts.sansSerifMain};
    text-align: center;
  }
`;

const ContactInfoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${fonts.serifMain};
`;

const ContactInfoText = styled.div`
  font-size: 1.25rem;
  font-family: ${fonts.sansSerifMain};
`;
