import Tag from "@/components/resuseable/Tag";
import { colors, fonts } from "@/styles/styleConstants";
import styled from "styled-components";

export default function QuickPersonalInfo() {
  return (
    <QuickInfo>
    <QuickInfoText>
      Qui aliquip anim laboris amet irure occaecat eu. Exercitation
      eiusmod tempor labore do tempor consequat. Irure cillum elit
      deserunt enim irure cillum laboris cillum voluptate. Non adipisicing
      pariatur occaecat id veniam deserunt mollit velit officia. Pariatur
      sunt dolore labore est id non proident aute incididunt.
    </QuickInfoText>
    <QuickInfoSelections>
      <div>
        <div>Phone</div>
        <div>Email</div>
      </div>
      <div>
        <div>Github</div>
        <div>LinkedIn</div>
      </div>

      <Tag color="wheat">React</Tag>
      <Tag color="cyan">Java</Tag>
    </QuickInfoSelections>
  </QuickInfo>
  );
}

const QuickInfo = styled.div`
  display: grid;
  grid-template-columns: 70% 20%;

  justify-content: space-between;

  font-family: ${fonts.sansSerifMain};
`;

const QuickInfoText = styled.div`
  background-color: darkslategray;

  color: ${colors.nearWhite};

  padding: 1rem;

  border-radius: 1rem;
`;

const QuickInfoSelections = styled.div`
  background-color: darkslateblue;

  color: ${colors.nearWhite};

  padding: 1rem;

  border-radius: 1rem;
`;