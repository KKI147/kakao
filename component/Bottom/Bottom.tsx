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
  justify-content: space-between;
  margin-top: 36px;
  width: 100%;
  word-break: keep-all;
  word-wrap: break-word;
  @media screen and (max-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }
  @media screen and (max-width: 1024px) {
    display: block;
    width: 106%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
