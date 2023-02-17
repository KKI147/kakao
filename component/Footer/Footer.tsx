import styled from "styled-components";

export default function Footer() {
  return (
    <Layout>
      <Section>
        <Wrapper>
          <div>
            <Title>카카오</Title>
            <Content>
              <div>카카오 문화</div>
              <div>공동체</div>
              <div>히스토리</div>
            </Content>
          </div>
          <Title>뉴스</Title>
          <div>
            <Title>기술과 서비스</Title>
            <Content>
              <div>기술</div>
              <div>서비스</div>
            </Content>
          </div>
          <div>
            <Title>약속과 책임</Title>
            <Content>
              <div>ESG</div>
              <div>소셜임팩트</div>
              <div>디지털 권리</div>
              <div>AI 윤리</div>
            </Content>
          </div>
          <div>
            <Title>투자정보</Title>
            <Content>
              <div>기업과지배구조</div>
              <div>주가정보</div>
              <div>재무정보</div>
              <div>IR행사</div>
              <div>공시정보</div>
              <div>공고</div>
            </Content>
          </div>
          <div>
            <Title>고객센터</Title>
            <Content>
              <div>카카오 고객센터</div>
              <div>Daum 고객센터</div>
            </Content>
            <SubTitle>인재영입</SubTitle>
            <SubTitle>카카오계정</SubTitle>
          </div>
        </Wrapper>
        <BottomSection>
          <TagBox>
            <div>이용약관</div>
            <TagContent>위치기반서비스이용약관</TagContent>
            <TagContent>개인정보처리방침</TagContent>
            <div>운영정책</div>
            <div>청소년보호정책</div>
            <div>브랜드보호정책</div>
            <div>권리침해신고안내</div>
            <div>공지사항</div>
            <div>사이버윤리실</div>
            <div>Contact Us</div>
            <LinkBtn>
              <div>관련사이트</div> <div>+</div>
            </LinkBtn>
          </TagBox>
          <Sources>© Copyright 2023. Made by Kim kyeong il </Sources>
        </BottomSection>
      </Section>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #fff;
  border-top: 1px solid #ebebeb;
  margin-top: 200px;
  @media screen and (max-width: 1024px) {
    margin-top: 100px;
  }
`;
const Section = styled.div`
  width: 1296px;
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    width: 952px;
  }
  @media screen and (max-width: 1024px) {
    width: 630px;
  }
  @media screen and (max-width: 768px) {
    width: 364px;
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  padding: 37px 0 0 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 0.5;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  line-height: 20px;
  color: #888;
  margin-top: 12px;
  & div {
    margin-top: 12px;
  }
`;
const SubTitle = styled.div`
  font-weight: bold;
  margin-top: 36px;
`;
const BottomSection = styled.div`
  margin-top: 120px;
  padding-bottom: 36px;
`;
const TagBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 12px;
  & div {
    margin: 0 5px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 11px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
`;
const TagContent = styled.div`
  color: #000;
  font-weight: bold;
`;
const Sources = styled.div`
  margin-top: 12px;
  color: #888;
  font-size: 12px;
`;

const LinkBtn = styled.div`
  margin-left: 150px;
  display: flex;
  width: 150px;
  height: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 12px;
  background-color: #eee;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  line-height: 18px;
  @media screen and (max-width: 768px) {
    width: 5px;
    height: 5px;
    justify-content: center;
    line-height: 0;
    padding: 10px 10px;
    div:nth-child(1) {
      display: none;
    }
    div:nth-child(2) {
      font-size: 20px;
    }
  }
`;
