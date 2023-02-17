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
import { useState } from "react";
import Portal from "@/component/Portal/Portal";
import Modal from "@/component/Modal/Modal";

export default function BottomRightCard() {
  const [project, setProject]: any = useState();
  const [modal, setModal] = useState<boolean>(false);
  const openModal = (value: string) => {
    setProject(value);
    setModal(!modal);
  };
  return (
    <Layout>
      {/* 주가정보 */}

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
            <Btn
              onClick={() =>
                openModal(
                  "카카오, (주)한화 건설부문과 손잡고 안산 포레나 도서..."
                )
              }
            >
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
              <div>카카오, (주)한화 건설부문과</div>
              <div>손잡고 안산 포레나 도서...</div>
            </ContentTitle>
            <ContentTag>#ESG #데이터센터 #상생</ContentTag>
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
            <Btn
              onClick={() =>
                openModal(
                  "카카오엔터, 웹툰&웹소설 창작자 대상 계약서 개정안..."
                )
              }
            >
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
              <div>카카오엔터, 웹툰&웹소설</div>
              <div>창작자 대상 계약서 개정안...</div>
            </ContentTitle>
            <ContentTag>#카카오엔터테인먼트</ContentTag>
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
            <Btn
              onClick={() =>
                openModal("카카오, 카카오톡 쇼핑하기 요일별 테마딜 오픈...")
              }
            >
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
              <div>카카오, 카카오톡 쇼핑하기</div>
              <div>요일별 테마딜 오픈...</div>
            </ContentTitle>
            <ContentTag>#쇼핑하기 #요일별테마딜</ContentTag>
          </ContentBox>
        </CardLayout>
        <ImgBox>
          <Image
            src={"/img/background4.webp"}
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
      {modal ? (
        <Portal selector={"portal"}>
          <Modal close={openModal} title={project} />
        </Portal>
      ) : (
        ""
      )}
    </Layout>
  );
}
