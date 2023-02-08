import styled from "styled-components";
import Image from "next/image";
export default function Calendar() {
  // const today = new Date();
  // const newDay = today.toISOString().split("T")[0].split("-");
  // const month = newDay[1];
  // const date = newDay[2];
  const today = new Intl.DateTimeFormat("kr").format(new Date());
  const month = today.split(".")[1];
  const date = today.split(".")[2];
  const day = new Date();

  const weekday = new Array(7);
  weekday[0] = "일";
  weekday[1] = "월";
  weekday[2] = "화";
  weekday[3] = "수";
  weekday[4] = "목";
  weekday[5] = "금";
  weekday[6] = "토";
  const week = weekday[day.getDay()];

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
        {month}월{date}일 {week}요일 소식입니다
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
