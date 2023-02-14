import ReactDOM, { createPortal } from "react-dom";

interface PortalProps {
  children: any;
  selector: string;
}

const Portal = ({ children, selector }: PortalProps) => {
  /* 이 엘리먼트는 = 윈도우 객체가 정의되었을때 돔객체에 querySelector함수에 selectror인자를 찾는데 이안자값이 우리가 html에 써놓은 id값 */
  const element =
    typeof window !== "undefined" && document.getElementById("portal");

  /* id값이 있고 children이란 modal이란 컴포넌트이다. 위 조건이 충족되면 포탈을 만드는데  */
  return element && children ? createPortal(children, element) : null;
};

export default Portal;
