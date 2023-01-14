import styled from "styled-components";
import { colors } from "@/styles/styleConstants";

export default styled.button`
  padding: 1rem;
  border: 4px solid ${colors.translucentLightBlack};
  
  font-size: 1rem;
  font-weight: 600;

  transition: 0.3s ease all;

  background-color: ${(props: { isMain: boolean }) =>
    props.isMain ? colors.translucentLightBlack : "transparent"};

  color: ${(props: { isMain: boolean }) =>
    props.isMain ? colors.nearWhite : colors.nearBlack};

  &:hover {
    cursor: pointer;

    color: ${colors.nearWhite};
    background-color: ${colors.nearBlack};
    border: 4px solid ${colors.nearBlack};
  }
`;
