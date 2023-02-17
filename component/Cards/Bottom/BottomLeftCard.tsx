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
  Service,
  Tag,
  TagBox,
} from "./Card";
import Image from "next/image";
import { getDateByString } from "@/module/date";
import { useState } from "react";
import Portal from "@/component/Portal/Portal";
import Modal from "@/component/Modal/Modal";

export default function BottomLeftCard() {
  const [project, setProject]: any = useState();
  const [modal, setModal] = useState<boolean>(false);
  const openModal = (value: string) => {
    setProject(value);
    setModal(!modal);
  };

  return (
    <Layout>
      <Card>
        <CardLayout>
          <TitleBox>
            <Image
              src={"/icon/call.png"}
              width={36}
              height={36}
              alt="image"
              loading="lazy"
              style={{
                marginRight: "8px",
                verticalAlign: "top",
              }}
            />
            <Text>고객센터</Text>
          </TitleBox>
          <Service>어떤 서비스를 도와드릴까요?</Service>
          <TagBox>
            <Tag>카카오</Tag>
            <Tag>다음</Tag>
            <Tag>멜론</Tag>
          </TagBox>
        </CardLayout>
      </Card>
      {/* It교육 */}

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
                  "카카오, 제주 오피스 사용 전력 재생에너지로 전환해..."
                )
              }
            >
              <Image
                src={"/icon/more.svg"}
                width={20}
                height={20}
                alt="image"
                loading="lazy"
                style={{ filter: "invert(80%)" }}
              />
            </Btn>
          </TitleBox>
          <ContentBox variant="image">
            <ContentTitle variant="image">
              <div>카카오, 제주 오피스 사용</div>
              <div>전력 재생에너지로 전환해...</div>
            </ContentTitle>
            <ContentTag>#제주오피스 #RE100</ContentTag>
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
                  "카카오, 제주 오피스 사용 전력 재생에너지로 전환해..."
                )
              }
            >
              <Image
                src={"/icon/more.svg"}
                width={20}
                height={20}
                alt="image"
                loading="lazy"
                style={{ filter: "invert(80%)" }}
              />
            </Btn>
          </TitleBox>
          <ContentBox variant="image">
            <ContentTitle variant="image">
              <div>카카오, 제주 오피스 사용</div>
              <div>전력 재생에너지로 전환해...</div>
            </ContentTitle>
            <ContentTag>#제주오피스 #RE100</ContentTag>
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
              borderRadius: "14px",
            }}
          />
        </ImgBox>
      </Card>

      <Card>
        <CardLayout>
          <TitleBox>
            <Image
              src={"/icon/secret.png"}
              width={36}
              height={36}
              alt="image"
              loading="lazy"
              style={{
                marginRight: "8px",
                verticalAlign: "top",
              }}
            />
            <Text>카카오 프라이버시</Text>
          </TitleBox>
          <ContentBox variant="image">
            <ContentTitle variant="image">
              <div>데이터의 연결과 보호의</div>
              <div>균형을 위한 카카오의 노력</div>
            </ContentTitle>
            <ContentTag>#카카오프라이버시</ContentTag>
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
      {/* 약속과책임 */}
    </Layout>
  );
}
