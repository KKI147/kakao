import styled from "styled-components";
import Image from "next/image";

export default function Middle() {
  const OnClickHandle = () => {
    window.open("https://www.kakaocorp.com/page/kakao/kakaoCulture");
  };
  return (
    <Layout>
      <Title>기술과 사람으로 더 나은 세상을 만듭니다.</Title>
      <Btn onClick={OnClickHandle}>
        <BtnBox>
          <div>카카오문화 바로가기</div>
          <Image
            src={"/icon/arrow.svg"}
            width={36}
            height={36}
            alt="arrow"
            loading="lazy"
            style={{
              width: "14px",
              height: "14px",
              alignItems: "center",
              // marginTop: "4px",
              filter: "invert(100%)",
              padding: "4px 0",
            }}
          />
        </BtnBox>
      </Btn>

      <div>
        <Image
          src={"/img/culture.png"}
          width={1000}
          height={250}
          alt="culture"
          loading="lazy"
          style={{
            // display: "block",
            // width: "100%",
            // maxWidth: "900px",
            height: "auto",
            margin: "50px auto 0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 540px;
  margin: 36px 18px;
  padding: 54px 66px 0;
  border-radius: 14px;
  background-color: #fff;
  text-align: center;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  box-sizing: border-box;
`;

const Title = styled.div`
  display: block;
  font-size: 42px;
  line-height: 62px;
  color: #000;
  font-weight: bold;
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
`;
