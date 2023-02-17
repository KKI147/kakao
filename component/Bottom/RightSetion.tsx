import styled from "styled-components";
import Image from "next/image";

export default function RightSection() {
  const OnClickHandle = () => {
    window.open("https://www.kakaocorp.com/page/service/service");
  };
  //careers.kakao.com/index
  https: return (
    <Layout>
      <Box>
        <Title>
          <div>세상만사에 관심이 많다면,당신은</div>
          <div>이미 카카오 크루</div>
        </Title>
        <Btn onClick={OnClickHandle}>
          <BtnBox>
            <div>인재영입 바로가기</div>
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
                filter: "invert(100%)",
                padding: "4px 0",
              }}
            />
          </BtnBox>
        </Btn>
      </Box>
    </Layout>
  );
}

const Layout = styled.div`
  display: inline-block;
  width: calc(50% - 10px);
  margin-left: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 1440px) {
    width: 100%;
    margin: 10px 0;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 10px 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Box = styled.div`
  display: block;
  height: 360px;
  padding: 36px 36px 0;
  border-radius: 12px;
  box-sizing: border-box;
  background: no-repeat calc(100% - 40px) calc(100% - 40px);
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  background-color: #3c64ff;
  background-image: url(/img/bg_recruit.png);
  background-size: 309px 160px;
`;

const Title = styled.div`
  display: block;
  font-size: 32px;
  line-height: 44px;
  color: #000;
  word-break: keep-all;
  font-weight: bold;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Btn = styled.div`
  display: inline-block;
  height: 33px;
  margin-top: 26px;
  padding: 9px 20px 0;
  border-radius: 42px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background-color: #000;
  vertical-align: top;
  cursor: pointer;
`;
