import styled from "styled-components";
import { ReactNode } from "react";
import Calendar from "../Calendar/Calendar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Calendar />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: calc(100% - 30%);
  padding: 0 15%;
`;
