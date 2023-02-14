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
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: 96px 0 0;
  position: relative;
  gap: 25px;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// ${({ variant }: CssType) => {
//   switch (variant) {
//     case "image":
//       return css`

//       `;
//     case "text":
//       return css`

//       `;
// default:
//       break;
//   }
// }}
// `;
