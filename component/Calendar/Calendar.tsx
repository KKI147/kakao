import styled from "styled-components";
import Image from "next/image";
import { getDateByString } from "@/module/date";
export default function Calendar() {
  return (
    <Box>
      <Title>
        <Image
          src={"/img/calendar.svg"}
          width={64}
          height={64}
          alt="search"
          loading="lazy"
        />
        <Content>오늘의 카카오</Content>
      </Title>
      <Content>
        {getDateByString("month")}월{getDateByString("date")}일
        {getDateByString("week")}요일 소식입니다
      </Content>
    </Box>
  );
}

const Box = styled.div`
  margin-top: 72px;
  font-size: 36px;
  line-height: 52px;
`;

const Title = styled.div`
  display: flex;
  gap: 15px;
`;
const Content = styled.div`
  /* padding-left: 68px; */
  font-weight: 700;
`;
