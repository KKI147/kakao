import styled from "styled-components";
import Image from "next/image";

export default function MoreButton() {
  return (
    <>
      <MoreBtn
        onClick={() => window.open("https://www.kakaocorp.com/page/collection")}
      >
        카카오 소식 모아보기
      </MoreBtn>
      <UpBtn onClick={() => window.scrollTo({ top: 0 })}>
        <Image
          src={"/icon/up_arrow.svg"}
          width={30}
          height={30}
          alt="arrow"
          loading="lazy"
          style={{
            filter: "invert(100%)",
            padding: "4px 0",
          }}
        />
      </UpBtn>
    </>
  );
}

const MoreBtn = styled.div`
  display: block;
  width: 260px;
  height: 60px;
  margin: 84px auto 0;
  border-radius: 60px;
  font-size: 18px;
  line-height: 60px;
  background-color: #eee;
  color: #000;
  text-align: center;
  cursor: pointer;
  position: relative;
  :hover {
    background-color: #d8d8d8;
  }
`;

const UpBtn = styled.div`
  display: flex;
  margin-top: 100px;
  width: 50px;
  height: 50px;
  font-size: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  float: right;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    position: relative;
    top: 50%;
    left: 45%;
    float: none;
  }
`;
