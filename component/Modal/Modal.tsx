import styled from "styled-components";
import Image from "next/image";
import { useEffect, WheelEvent } from "react";
type ModalProps = {
  close: any;
  title: string;
};
export default function Modal({ close, title }: ModalProps) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <Layout>
      <Image
        src={"/icon/cancel.svg"}
        width={36}
        height={36}
        alt="image"
        loading="lazy"
        style={{
          width: "36px",
          height: "36px",
          filter: "invert(100%)",
          cursor: "pointer",
          float: "right",
          paddingRight: "20px",
        }}
        onClick={() => close()}
      />
      <Wrapper>
        <Title>{title}</Title>
        <Content>Kakao Clone Coding Modal Page</Content>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.55);
`;

const Btn = styled.div`
  color: #eee;
  font-size: 28px;
  padding-left: 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: #666;
  max-width: 760px;
  height: 550px;
  border-radius: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  word-break: keep-all;
`;

const Content = styled.div`
  font-size: 26px;
  word-break: keep-all;
`;
