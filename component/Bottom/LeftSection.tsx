import styled from "styled-components";
import Image from "next/image";

export default function LeftSection() {
  const OnClickHandle = () => {
    window.open("https://www.kakaocorp.com/page/service/service");
  };
  return (
    <Layout>
      <Box>
        <Title>
          <div>사람과 기술로 일상을 돕는 카카오</div>
          <div>서비스</div>
        </Title>
        <Btn onClick={OnClickHandle}>
          <BtnBox>
            <div>서비스 바로가기</div>
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
  margin-right: 10px;
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
  background-color: #fae100;
  background-image: url(/img/bg_service.png);
  background-size: 160px 160px;
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
