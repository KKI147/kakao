import styled from "styled-components";
import { ReactNode } from "react";
import Calendar from "../Calendar/Calendar";
import TopSection from "../Article/TopArticle/TopSection";
import TopAside from "../Article/TopArticle/TopAside";
import Middle from "../Middle/Middle";
import Navbar from "../Navbar/Navbar";
import BottomAside from "../Article/BottomArticle/BottomAside";
import BottomSection from "../Article/BottomArticle/BottomSection";
import Bottom from "../Bottom/Bottom";
import MoreButton from "../MoreButton/MoreButton";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Wrapper>
        <Calendar />
        <SectionBox>
          <TopSection />
          <TopAside />
        </SectionBox>
        <Middle />
        <Navbar />
        <SectionBox>
          <BottomAside />
          <BottomSection />
        </SectionBox>
        <Bottom />
        <MoreButton />
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  width: 1296px;
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    width: 952px;
  }
  @media screen and (max-width: 1024px) {
    width: 630px;
  }
  @media screen and (max-width: 768px) {
    width: 364px;
  }
`;

const SectionBox = styled.div`
  display: flex;
  width: 100%;
  word-break: keep-all;
  word-wrap: break-word;
  @media screen and (max-width: 1440px) {
    width: 952px;
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    width: 100%;
  }
`;
