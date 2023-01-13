import styled from "styled-components";
import { colors } from "@/styles/styleConstants";

export default function Footer() {
  return (
    <FooterWrapper>
      <span>Alex Keo</span>
      <span>
        <div>Contact Info</div>
        <div>
          <span>Phone Number</span>
          <span>Email</span>
        </div>
      </span>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  height: 3rem;
  width: 100%;
  background-color: ${colors.nearWhite};
  display: flex;
  justify-content: space-between;
`;
