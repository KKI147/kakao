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

        <ImageLayout>
          <ImgBox>
            <Image src={"/icon/search.svg"} alt="image" fill loading="lazy" />
          </ImgBox>
          <ImgBox>
            <Image
              src={"/icon/transefer.svg"}
              alt="image"
              loading="lazy"
              fill
            />
          </ImgBox>
          <ImgBox>
            <Image src={"/icon/moon.svg"} fill alt="image" loading="lazy" />
          </ImgBox>
        </ImageLayout>
      </Nav>
    </Headers>
  );
}

const Headers = styled.header`
  width: 100%;
  height: 72px;
  @media screen and (max-width: 1280px) {
    height: 80px;
  }
  @media screen and (max-width: 768px) {
    height: 88px;
  }
  @media screen and (max-width: 480px) {
    height: 96px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  @media screen and (max-width: 1280px) {
    font-size: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1296px;
  margin: 0 auto;
  height: 100%;

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

const List = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  :hover {
    color: #666;
  }
  & div {
    padding: 0 28px;
    :hover {
      color: #000;
    }
  }
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    font-size: 14px;
    & div {
      padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
      & div {
        padding: 0 12px;
      }
    }
    @media screen and (max-width: 480px) {
      font-size: 10px;
      & div {
        padding: 0 10px;
      }
    }
  }
`;

const ImageLayout = styled.div`
  display: flex;
`;
const ImgBox = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  margin: 0 10px;
  @media screen and (max-width: 1280px) {
    width: 28px;
    height: 28px;
    margin: 0 8px;
  }
  @media screen and (max-width: 768px) {
    width: 22px;
    height: 22px;
    margin: 0 6px;
  }
  @media screen and (max-width: 480px) {
    width: 16px;
    height: 16px;
    margin: 0 4px;
  }
`;
