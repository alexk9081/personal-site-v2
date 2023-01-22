import { colors, fonts } from "@/styles/styleConstants";
import styled from "styled-components";

export default function ChangingSectionInfo() {
  return (
    <ChangingSection>
      <div>
        <SectionTitles>
          <span>Selection 1</span>
          <span>Selection 2</span>
          <span>Selection 3</span>
        </SectionTitles>
        <SectionDescription>This is the chaging description</SectionDescription>
      </div>

      <div>
        <SectionImage src="http://fakeimg.pl/500x500?font=museo" alt="" />
      </div>
    </ChangingSection>
  );
}

const ChangingSection = styled.div`
  display: grid;
  grid-template-columns: 60% 30%;

  justify-content: space-between;
`;

const SectionTitles = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 20%;

  span {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: ${fonts.sansSerifMain};

    text-align: center;

    border-bottom: 4px solid ${colors.nearBlack};

    cursor: pointer;
  }
`;

const SectionDescription = styled.div`
  margin: 1rem 0;

  font-size: 1rem;
  font-family: ${fonts.sansSerifMain};
`;

const SectionImage = styled.img`
  width: 100%;
`;
