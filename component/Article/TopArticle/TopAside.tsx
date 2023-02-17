import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import TopLeftCard from "@/component/Cards/Top/TopLeftCard";
import TopRightCard from "@/component/Cards/Top/TopRightCard";

export default function Aside() {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);

  return mount ? (
    <Wrapper>
      <TopLeftCard />
      <TopRightCard />
    </Wrapper>
  ) : (
    <></>
  );
}

const Wrapper = styled.div`
  width: 50%;
  height: 700px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 96px 28px 0 0;
  right: -28px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1440px) {
    width: 40%;
    display: block;
    padding: 96px 35px 0 0;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    width: 70%;
    padding: 50px 28px 0 0;
    right: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px 20px 0 0;
    height: auto;
    overflow: visible;
  }
`;
