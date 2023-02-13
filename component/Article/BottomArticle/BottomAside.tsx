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
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  position: relative;
  gap: 25px;
`;
