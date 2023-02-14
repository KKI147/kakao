import styled from "styled-components";
import Image from "next/image";
type ModalProps = {
  close: any;
};
export default function Modal({ close }: ModalProps) {
  return (
    <Layout>
      <Section>
        <Image
          src={"/icon/cancel.svg"}
          width={36}
          height={36}
          alt="image"
          loading="lazy"
          style={{
            width: "36px",
            height: "36px",
            marginRight: "8px",
            // verticalAlign: "top",
            filter: "invert(100%)",
            cursor: "pointer",
          }}
          onClick={() => close()}
        />
        <Image
          src={"/icon/kakao.svg"}
          width={36}
          height={36}
          alt="image"
          loading="lazy"
          style={{
            width: "36px",
            height: "36px",
            marginRight: "8px",
            verticalAlign: "top",
          }}
        />
        <Image
          src={"/icon/instar.svg"}
          width={36}
          height={36}
          alt="image"
          loading="lazy"
          style={{
            width: "36px",
            height: "36px",
            marginRight: "8px",
            verticalAlign: "top",
          }}
        />
        <Image
          src={"/icon/facebook.svg"}
          width={36}
          height={36}
          alt="image"
          loading="lazy"
          style={{
            marginRight: "8px",
            verticalAlign: "top",
          }}
        />
        <Image
          src={"/icon/linkedin.svg"}
          width={36}
          height={36}
          alt="image"
          loading="lazy"
          style={{
            marginRight: "8px",
            // verticalAlign: "top",
          }}
        />
      </Section>
    </Layout>
  );
}
const Section = styled.div`
  display: grid;

  float: right;
  gap: 15px;
  margin-top: 20px;
  margin-right: 15px;
`;

const Layout = styled.div`
  position: absolute;
  display: inline-block;
  width: auto;
  height: auto;
  top: 360px;
  left: 270px;
  right: 960px;
  bottom: -122px;
  z-index: 30;
  opacity: 1;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.55);
`;

const Btn = styled.div`
  color: #eee;
  font-size: 28px;
  padding-left: 20px;
  cursor: pointer;
`;
