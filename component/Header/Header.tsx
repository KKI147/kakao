import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <Headers>
      <Nav>
        <Title>kakao</Title>
        <List>
          <div>카카오</div>
          <div>뉴스</div>
          <div>기술과 서비스</div>
          <div>약속과 책임</div>
        </List>
        <div>
          <Image
            src={"/icon/search.svg"}
            width={32}
            height={32}
            alt="search"
            loading="lazy"
            style={{ margin: "0 10px" }}
          />
          <Image
            src={"/icon/transefer.svg"}
            width={32}
            height={32}
            alt="transefer"
            loading="lazy"
            style={{ margin: "0 10px" }}
          />
          <Image
            src={"/icon/moon.svg"}
            width={32}
            height={32}
            alt="moon"
            loading="lazy"
            style={{ margin: "0 10px" }}
          />
        </div>
      </Nav>
    </Headers>
  );
}

const Headers = styled.header`
  width: 100%;
  height: 72px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 30%);
  height: 100%;
  padding: 0 15%;
`;

const List = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  & div {
    padding: 0 28px;
  }
`;
