import {
  Layout,
  Card,
  CardLayout,
  Text,
  Btn,
  ContentBox,
  ContentTitle,
  ArrowBox,
  ContentArrow,
  Arrow,
  ContentTag,
  Time,
  ImgBox,
  Date,
  TitleBox,
} from "./Card";
import Image from "next/image";
import { getDateByString } from "@/module/date";

export default function TopRightCard() {
  return (
    <Layout>
      {/* 주가정보 */}
      <Card>
        <CardLayout>
          <TitleBox>
            <Image
              src={"/icon/money.png"}
              width={36}
              height={36}
              alt="money"
              loading="lazy"
              style={{
                marginRight: "8px",
                verticalAlign: "top",
              }}
            />
            <Text>주가정보</Text>
          </TitleBox>
          <ContentBox variant="text">
            <ContentTitle variant="text">67,600</ContentTitle>
            <ArrowBox>
              <Arrow />
              <ContentArrow>3300</ContentArrow>
            </ArrowBox>
          </ContentBox>
          <Time>
            {getDateByString("newday")} {getDateByString("time")}
          </Time>
        </CardLayout>
      </Card>
      {/* 보조자료 */}
      <Card>
        <CardLayout>
          <TitleBox>
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
            <Date>{getDateByString("newday")}</Date>
            <Btn>
              <Image
                src={"/icon/more.svg"}
                width={20}
                height={20}
                alt="more"
                loading="lazy"
                style={{ filter: "invert(80%)" }}
              />
            </Btn>
          </TitleBox>
          <ContentBox variant="image">
            <ContentTitle variant="image">
              <div>카카오, 카카오 테크</div>
              <div>캠퍼스로 지역 개발자 양...</div>
            </ContentTitle>
            <ContentTag>#ESG #IT교육 #인재육성</ContentTag>
          </ContentBox>
        </CardLayout>
        <ImgBox>
          <Image
            src={"/img/background2.webp"}
            width={200}
            height={250}
            alt="background2"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderBottomLeftRadius: "14px",
              borderBottomRightRadius: "14px",
            }}
          />
        </ImgBox>
      </Card>
      {/* 보도자료 */}
      <Card>
        <CardLayout>
          <TitleBox>
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
            <Date>{getDateByString("newday")}</Date>
            <Btn>
              <Image
                src={"/icon/more.svg"}
                width={20}
                height={20}
                alt="more"
                loading="lazy"
                style={{ filter: "invert(80%)" }}
              />
            </Btn>
          </TitleBox>
          <ContentBox variant="image">
            <ContentTitle variant="image">
              <div>카카오, SM엔터테인먼트</div>
              <div>지분 9.05%확보</div>
            </ContentTitle>
            <ContentTag>#비욘드코리아 #엔터테인먼트</ContentTag>
          </ContentBox>
        </CardLayout>
        <ImgBox>
          <Image
            src={"/img/background4.webp"}
            width={200}
            height={250}
            alt="background4"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderBottomLeftRadius: "14px",
              borderBottomRightRadius: "14px",
            }}
          />
        </ImgBox>
      </Card>
    </Layout>
  );
}
