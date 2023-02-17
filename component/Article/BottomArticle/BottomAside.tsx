import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import BottomLeftCard from "@/component/Cards/Bottom/BottomLeftCard";
import BottomRightCard from "@/component/Cards/Bottom/BottomRightCard";

export default function Aside() {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);

  return mount ? (
    <Wrapper>
      <BottomLeftCard />
      <BottomRightCard />
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
  padding-top: 16px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1440px) {
    width: 40%;
    display: block;
    padding: 16px 35px 0 5px;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    width: 70%;
    padding: 30px 28px 0 0;
    left: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px 20px 0 0;
    height: auto;
    overflow: visible;
  }
`;
