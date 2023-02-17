import {
  Layout,
  Card,
  CardLayout,
  Text,
  Btn,
  ContentBox,
  ContentTitle,
  ContentTag,
  ImgBox,
  TitleBox,
  Date,
} from "./Card";
import Image from "next/image";
import { getDateByString } from "@/module/date";
import { useState } from "react";
import Portal from "@/component/Portal/Portal";
import Modal from "@/component/Modal/Modal";

export default function TopLeftCard() {
  const [project, setProject]: any = useState();
  const [modal, setModal] = useState<boolean>(false);
  const openModal = (value: string) => {
    setProject(value);
    setModal(!modal);
  };

  return (
    <Layout>
      {/* It교육 */}
      <Card>
        <CardLayout>
          <TitleBox>
            <Image
              src={"/icon/heart.webp"}
              width={36}
              height={36}
              alt="heart"
              loading="lazy"
              style={{
                marginRight: "8px",
                verticalAlign: "top",
              }}
            />
            <Text>IT교육</Text>
            <Btn
              onClick={() =>
                openModal("함께 배우며 성장하는 카카오 테크 캠퍼스")
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
              <div>함께 배우며 성장하는</div>
              <div>카카오 테크 캠퍼스</div>
            </ContentTitle>
            <ContentTag>#ESG #IT교육 #소셜임팩트</ContentTag>
          </ContentBox>
        </CardLayout>
        <ImgBox>
          <Image
            src={"/img/background.webp"}
            width={200}
            height={250}
            alt="background"
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
                openModal("카카오, 카카오톡 선물하기 밸런타인데이 프로모션...")
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
              <div>카카오, 카카오톡 선물하기</div>
              <div>밸런타인데이 프로모션...</div>
            </ContentTitle>
            <ContentTag>#카카오톡선물하기</ContentTag>
          </ContentBox>
        </CardLayout>
        <ImgBox>
          <Image
            src={"/img/background3.webp"}
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
              borderRadius: "14px",
            }}
          />
        </ImgBox>
      </Card>
      {/* 약속과책임 */}
      <Card>
        <CardLayout>
          <TitleBox>
            <Image
              src={"/icon/hand.png"}
              width={36}
              height={36}
              alt="data"
              loading="lazy"
              style={{
                marginRight: "8px",
                verticalAlign: "top",
              }}
            />
            <Text>약속과 책임</Text>
            <Btn
              onClick={() =>
                openModal("카카오는 당신과 함께 더 나은 세상을 만듭니다.")
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
              <div>카카오는 당신과 함께 더 나은</div>
              <div>세상을 만듭니다.</div>
            </ContentTitle>
            <ContentTag>#약속과책임 #esg #소셜임팩트</ContentTag>
          </ContentBox>
        </CardLayout>
      </Card>
      {/* 약속과책임 */}
      <Card>
        <CardLayout>
          <TitleBox>
            <Image
              src={"/icon/hand.png"}
              width={36}
              height={36}
              alt="data"
              loading="lazy"
              style={{
                marginRight: "8px",
                verticalAlign: "top",
              }}
            />
            <Text>약속과 책임</Text>
            <Btn onClick={() => openModal("ESG보고서, 카카오의 약속과 책임")}>
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
              <div>ESG보고서,</div>
              <div>카카오의 약속과 책임</div>
            </ContentTitle>
            <ContentTag>#{"2021년성과"} #ESG보고서</ContentTag>
          </ContentBox>
        </CardLayout>
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
