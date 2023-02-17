import styled from "styled-components";
import Image from "next/image";
import Portal from "@/component/Portal/Portal";
import Modal from "@/component/Modal/Modal";
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
          {modal ? (
            <Portal selector={"portal"}>
              <Modal
                close={openModal}
                title={"카카오엔터, 2323년 드라마 영화 30여편 기획 제작"}
              />
            </Portal>
          ) : (
            ""
          )}
          <Title>
            <Image
              src={"/icon/data.webp"}
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
          <ImgBox>
            <Image
              src={"/img/background4.webp"}
              width={1000}
              height={450}
              alt="image"
              loading="lazy"
              style={{
                width: "100%",
              }}
            />
          </ImgBox>
        </Box>
      </Wrapper>
    </>
  );
}
const ImgBox = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 16px 0;
  padding-right: 28px;
  right: -28px;
  width: calc(50% - 16px);
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-0.5rem);
  }
  @media screen and (max-width: 1440px) {
    width: 60%;
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
    right: 0;
    margin-top: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;
const Box = styled.div`
  padding: 25px 10px 10px 0;
  position: relative;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
`;

const Title = styled.div`
  display: flex;
  height: 36px;
  margin-top: -1px;
  margin-left: 20px;
  padding-right: 20px;
  line-height: 1.5;
  font-size: 13px;
  @media screen and (max-width: 1280px) {
    line-height: 1;
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    line-height: 0.8;
    font-size: 10px;
  }
  @media screen and (max-width: 468px) {
    line-height: 0.5;
    font-size: 8px;
  }
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
  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 468px) {
    font-size: 8px;
  }
`;
