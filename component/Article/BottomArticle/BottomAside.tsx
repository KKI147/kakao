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
    width: calc(50% - 16px);
  }
  @media screen and (max-width: 1024px) {
    width: calc(50% - 16px);
  }
  @media screen and (max-width: 768px) {
    width: calc(50% - 16px);
  }
`;
