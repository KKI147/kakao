import styled from "styled-components";
import Image from "next/image";
import { getDateByString } from "@/module/date";
export default function Calendar() {
  return (
    <Box>
      <Title>
        <Image
          src={"/img/calendar.gif"}
          width={80}
          height={64}
          alt="image"
          loading="lazy"
        />
        <Content>오늘의 카카오</Content>
      </Title>
      <Content>
        {getDateByString("month")}월{getDateByString("date")}일{" "}
        {getDateByString("week")}요일 소식입니다
      </Content>
    </Box>
  );
}

const Box = styled.div`
  margin-top: 72px;
  font-size: 36px;
  line-height: 52px;
  @media screen and (max-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 44px;
  }
  @media screen and (max-width: 468px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

const Title = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Content = styled.div`
  font-weight: 700;
`;
