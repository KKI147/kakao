import styled, { css } from "styled-components";

export const Layout = styled.div`
  width: calc(50% - 16px);
  padding-right: 6px;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 47%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: block;
  box-sizing: border-box;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 4px 0 12px 2px rgb(0 0 0 / 9%);
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const CardLayout = styled.div`
  padding: 25px 24px 0;
  height: 170px;
`;
export const Text = styled.div`
  height: 34px;
  margin-top: 1px;
  padding: 0px 13px;
  border-radius: 13px;
  font-size: 13px;
  line-height: 34px;
  background-color: #eee;
  vertical-align: top;
`;

export const Btn = styled.button`
  position: absolute;
  top: 30px;
  right: 14px;
  z-index: 20;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
interface CssType {
  variant: string;
}

export const ContentBox = styled.div`
  ${({ variant }: CssType) => {
    switch (variant) {
      case "image":
        return css`
          margin-top: 15px;
          padding: 0 6px;
          line-height: 1.5;
        `;
      case "text":
        return css`
          display: flex;
          align-items: center;
          margin-top: 15px;
          padding: 0 6px;
          line-height: 1.5;
          gap: 20px;
        `;
      default:
        break;
    }
  }}
`;

export const ContentTitle = styled.div`
  ${({ variant }: CssType) => {
    switch (variant) {
      case "image":
        return css`
          font-size: 18px;
          font-weight: 800;
        `;
      case "text":
        return css`
          font-size: 38px;
          font-weight: 500;
        `;
      default:
        break;
    }
  }}
`;

export const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  padding: auto 0;
  color: #2879ff;
  gap: 5px;
`;
export const ContentArrow = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const Arrow = styled.div`
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-top: 7px solid #2879ff;
`;
export const ContentTag = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #666;
`;

export const TitleBox = styled.div`
  display: flex;
  height: auto;
  align-items: center;
`;
export const Time = styled.div`
  padding: 0 6px;
  margin: 15px 0;
  font-size: 14px;
  color: #666;
`;
export const ImgBox = styled.div`
  height: 200px;
`;
export const Date = styled.div`
  font-size: 12px;
  letter-spacing: -1px;
  margin: 8px 6px;
  color: #666;
`;

export const Service = styled.div`
  display: inline-block;
  overflow: visible;
  position: relative;
  height: auto;
  margin-top: 13px;
  padding: 8px 20px 8px 25px;
  border-radius: 15px;
  font-size: 16px;
  line-height: 26px;
  color: #000;
  background-color: #fee102;
  -webkit-box-orient: initial;
  -webkit-line-clamp: initial;
  font-weight: bold;
`;

export const Tag = styled.div`
  display: block;
  height: 42px;
  padding: 0 20px;
  border-radius: 15px;
  font-size: 16px;
  line-height: 42px;
  color: #666;
  background-color: #f4f4f4;
`;

export const TagBox = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 10px;
`;
