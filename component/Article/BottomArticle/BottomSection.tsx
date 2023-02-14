import styled from "styled-components";
import Image from "next/image";
import Modal from "../../Portal/Portal";
import { useState } from "react";
import { getDateByString } from "@/module/date";

export default function Section() {
  const [modal, setModal] = useState<boolean>(false);
  const openModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Wrapper>
        <Box>
          <Title>
            <Image
              src={"/img/data.webp"}
              width={36}
              height={36}
              alt="data"
              loading="lazy"
              style={{
                marginRight: "8px",
                verticalAlign: "top",
              }}
            />
            <Text>보도자료</Text>
            <Dot></Dot>
            <Day>{getDateByString("newday")}</Day>
            <Btn onClick={openModal}>
              <Image
                src={"/icon/more.svg"}
                width={20}
                height={20}
                alt="more"
                loading="lazy"
                style={{ filter: "invert(80%)" }}
              />
            </Btn>
          </Title>
          <ContentBox>
            <ContentTitle>
              <div>카카오엔터, 2323년 드라마 영화 30여편</div>
              <div>기획 제작</div>
            </ContentTitle>
            <ContentTag>
              #카카오엔터테인먼트 #프리미엄콘텐츠 #글로벌스튜디오도약
            </ContentTag>
          </ContentBox>
          <Image
            src={"/img/background4.webp"}
            width={400}
            height={800}
            alt="kakao"
            loading="lazy"
            style={{
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
            }}
          />
        </Box>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  /* margin: 0 18px; */
  position: relative;

  width: 50%;
`;
const Box = styled.div`
  padding: 25px 10px 10px 0;
  margin: 0 -15px;
  position: relative;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

const Title = styled.div`
  display: flex;
  height: 36px;
  margin-top: -1px;
  margin-left: 20px;
  padding-right: 20px;
  line-height: 1.5;
  font-size: 13px;
`;

const Text = styled.span`
  height: 34px;
  margin-top: 1px;
  padding: 0 13px;
  border-radius: 13px;
  font-size: 13px;
  line-height: 34px;
  background-color: #eee;
  vertical-align: top;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  margin-left: 3px;
  border-radius: 8px;
  background-color: #ff5737;
`;

const Day = styled.span`
  font-size: 12px;
  letter-spacing: -1px;
  margin: 8px 0 0 6px;
  color: #666;
`;

const Btn = styled.button`
  position: absolute;
  top: 25px;
  right: 20px;
  z-index: 20;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Cutom = styled.div`
  position: absolute;
  z-index: 30;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 12px;
  /* width: 50%;
  height: 100vh; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ContentBox = styled.div`
  margin-top: 15px;
  padding: 0 20px;
  line-height: 1.5;
`;

const ContentTitle = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const ContentTag = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #666;
`;
