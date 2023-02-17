import styled from "styled-components";
import Image from "next/image";

export default function Middle() {
  const OnClickHandle = () => {
    window.open("https://www.kakaocorp.com/page/kakao/kakaoCulture");
  };
  return (
    <Layout>
      <Title>
        기술과 사람으로 <Line />더 나은 세상을 만듭니다.
      </Title>
      <Btn onClick={OnClickHandle}>
        <BtnBox>
          <div>카카오문화 바로가기</div>
          <Image
            src={"/icon/arrow.svg"}
            width={36}
            height={36}
            alt="image"
            loading="lazy"
            style={{
              width: "14px",
              height: "14px",
              alignItems: "center",
              filter: "invert(100%)",
              padding: "4px 0",
            }}
          />
        </BtnBox>
      </Btn>
      <ImageBox>
        <Image
          src={"/img/culture.png"}
          alt="image"
          fill
          loading="lazy"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </ImageBox>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 540px;
  margin: 36px 0;
  padding: 54px 66px 0;
  border-radius: 14px;
  background-color: #fff;
  text-align: center;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  box-sizing: border-box;
  @media screen and (max-width: 1440px) {
    height: 500px;
  }
  @media screen and (max-width: 1024px) {
    height: 460px;
    padding: 46px 66px 0;
  }
  @media screen and (max-width: 768px) {
    height: 340px;
    padding: 46px 0 0;
  }
`;

const Title = styled.div`
  display: block;
  font-size: 42px;
  line-height: 62px;
  color: #000;
  font-weight: bold;
  @media screen and (max-width: 1440px) {
    font-size: 38px;
    line-height: 56px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 34px;
    line-height: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 44px;
  }
`;
const BtnBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Btn = styled.div`
  display: inline-block;
  height: 33px;
  margin-top: 36px;
  padding: 9px 20px 0;
  border-radius: 42px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background-color: #000;
  vertical-align: top;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    height: 30px;
    margin-top: 30px;
    font-size: 12px;
    line-height: 20px;
  }
  @media screen and (max-width: 1024px) {
    height: 28px;
    margin-top: 20px;
    font-size: 12px;
    line-height: 20px;
  }
  @media screen and (max-width: 768px) {
    height: 28px;
    margin-top: 18px;
    font-size: 10px;
    line-height: 18px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 80%;
  margin: 50px auto;
  height: 250px;

  @media screen and (max-width: 1440px) {
    height: 35%;
  }
  @media screen and (max-width: 1024px) {
    height: 40%;
    margin: 40px auto;
  }
  @media screen and (max-width: 768px) {
    height: 20%;
    margin: 30px auto;
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
