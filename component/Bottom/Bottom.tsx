import styled from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSetion";

export default function Bottom() {
  return (
    <BottomSection>
      <LeftSection />
      <RightSection />
    </BottomSection>
  );
}

const BottomSection = styled.div`
  display: flex;
  margin-top: 36px;
  width: 100%;
  gap: 50px;
  word-break: keep-all;
  word-wrap: break-word;
`;
