import styled from "styled-components";
import Image from "next/image";

export default function Navbar() {
  return (
    <Layout>
      <Text>
        카카오의 다양한 <Line />
        소식을 구독해보세요.
      </Text>
      <FlexBox>
        <ImgBox>
          <Image
            src={"/icon/kakao.svg"}
            fill
            alt="image"
            loading="lazy"
            style={{
              marginRight: "8px",
              verticalAlign: "top",
            }}
            onClick={() => window.open("https://pf.kakao.com/_ZRQBh")}
          />
        </ImgBox>
        <ImgBox>
          <Image
            src={"/icon/youtube.svg"}
            fill
            alt="image"
            loading="lazy"
            style={{
              marginRight: "8px",
              verticalAlign: "top",
            }}
            onClick={() =>
              window.open("https://www.youtube.com/@Kakaobrandmedia")
            }
          />
        </ImgBox>
        <ImgBox>
          <Image
            src={"/icon/instar.svg"}
            fill
            alt="image"
            loading="lazy"
            style={{
              marginRight: "8px",
              verticalAlign: "top",
            }}
            onClick={() =>
              window.open("https://www.instagram.com/kakao.today/")
            }
          />
        </ImgBox>
        <ImgBox>
          <Image
            src={"/icon/facebook.svg"}
            fill
            alt="image"
            loading="lazy"
            style={{
              marginRight: "8px",
              verticalAlign: "top",
            }}
            onClick={() =>
              window.open("https://www.facebook.com/kakao.brandmedia")
            }
          />
        </ImgBox>
        <ImgBox>
          <Image
            src={"/icon/linkedin.svg"}
            fill
            alt="image"
            loading="lazy"
            style={{
              marginRight: "8px",
              verticalAlign: "top",
            }}
            onClick={() =>
              window.open("https://www.linkedin.com/company/kakaocorp")
            }
          />
        </ImgBox>
      </FlexBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-around;
  width: 100%;
  height: 116px;
  padding: 28px 36px;
  margin: 36px 0;
  border-radius: 14px;
  background-color: #fff;
  text-align: center;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  box-sizing: border-box;
  @media screen and (max-width: 1440px) {
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    width: 106%;
    height: 220px;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    overflow: auto;
  }
`;

const FlexBox = styled.div`
  display: flex;
`;
const Text = styled.div`
  margin-top: 8px;
  font-size: 32px;
  color: #000;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    margin: 12px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  position: relative;
  width: 64px;
  height: 64px;
  margin: auto 20px;

  cursor: pointer;

  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
    gap: 10px;
  }
`;

const Line = styled.br`
  display: none;
  @media screen and (max-width: 1440px) {
    display: block;
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
