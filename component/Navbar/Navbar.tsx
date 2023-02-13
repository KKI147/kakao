import styled from "styled-components";
import Image from "next/image";

export default function Navbar() {
  // const onClickHandle = (url: string) => {
  //   if (url === "kakao") {
  //     return window.open("https://pf.kakao.com/_ZRQBh");
  //   } else if (url === "yutube") {
  //     return window.open("https://www.youtube.com/@Kakaobrandmedia");
  //   } else if (url === "instar") {
  //     return window.open("https://www.instagram.com/kakao.today/");
  //   } else if (url === "face") {
  //     return window.open("https://www.facebook.com/kakao.brandmedia");
  //   } else if (url === "linked") {
  //     return window.open("https://www.linkedin.com/company/kakaocorp");
  //   } else {
  //     return "bad request";
  //   }
  // };
  const onClickHandle = (url: string) => {
    return window.open(url);
  };
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
          src={"/icon/yutube.svg"}
          width={64}
          height={64}
          alt="yutube"
          loading="lazy"
          style={{
            marginRight: "8px",
            verticalAlign: "top",
            width: "60px",
            height: "60px",
          }}
          onClick={() => onClickHandle("yutube")}
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
          onClick={() => onClickHandle("instar")}
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
          onClick={() => onClickHandle("face")}
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
          onClick={() => onClickHandle("linked")}
        />
      </ImgBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 116px;
  padding: 28px 36px;
  margin: 36px 18px;
  border-radius: 14px;
  background-color: #fff;
  text-align: center;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  box-sizing: border-box;
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
