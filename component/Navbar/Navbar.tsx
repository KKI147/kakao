import styled from "styled-components";
import Image from "next/image";

export default function Navbar() {
  return (
    <Layout>
      <Text>카카오의 다양한 소식을 구독해보세요.</Text>
      <ImgBox>
        <Image
          src={"/icon/kakao.svg"}
          width={64}
          height={64}
          alt="kakao"
          loading="lazy"
          style={{
            marginRight: "8px",
            verticalAlign: "top",
            width: "60px",
            height: "60px",
          }}
          onClick={() => window.open("https://pf.kakao.com/_ZRQBh")}
        />
        <Image
          src={"/icon/youtube.svg"}
          width={64}
          height={64}
          alt="youtube"
          loading="lazy"
          style={{
            marginRight: "8px",
            verticalAlign: "top",
            width: "60px",
            height: "60px",
          }}
          onClick={() =>
            window.open("https://www.youtube.com/@Kakaobrandmedia")
          }
        />
        <Image
          src={"/icon/instar.svg"}
          width={64}
          height={64}
          alt="instar"
          loading="lazy"
          style={{
            marginRight: "8px",
            verticalAlign: "top",
            width: "60px",
            height: "60px",
          }}
          onClick={() => window.open("https://www.instagram.com/kakao.today/")}
        />

        <Image
          src={"/icon/facebook.svg"}
          width={64}
          height={64}
          alt="facebook"
          loading="lazy"
          style={{
            marginRight: "8px",
            verticalAlign: "top",
            width: "60px",
            height: "60px",
          }}
          onClick={() =>
            window.open("https://www.facebook.com/kakao.brandmedia")
          }
        />

        <Image
          src={"/icon/linkedin.svg"}
          width={64}
          height={64}
          alt="linkedin"
          loading="lazy"
          style={{
            marginRight: "8px",
            verticalAlign: "top",
            width: "60px",
            height: "60px",
          }}
          onClick={() =>
            window.open("https://www.linkedin.com/company/kakaocorp")
          }
        />
      </ImgBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
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
    flex-wrap: wrap;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    overflow: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    overflow: auto;
  }
`;

const Text = styled.div`
  margin-top: 8px;
  font-size: 32px;
  color: #000;
  font-weight: bold;
`;

const ImgBox = styled.div`
  display: flex;
  gap: 15px;
  & Img {
    cursor: pointer;
  }
`;
