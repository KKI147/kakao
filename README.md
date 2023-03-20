# 프로젝트 목적
일반 사용자들에게 인지된 프로젝트를 HTML,CSS 만을 이용한 클론코딩

## 목표
<ul>
 <li>Kakao Hompage의 레이아웃을 HTML, CSS만으로 초기 레이아웃 설계</li>
  <li>설계 레이아웃 구현</li>
   <li>이외의 애니메이션이나 Modal등 MVP 구현</li>
    
 </ul>


## 🔗[페이지 이동하기](https://kakao-tau.vercel.app/)

## **🛠️ 스택**
<div>
<img src="https://img.shields.io/badge/html-1572B6?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<br>
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-339933?style=for-the-badge&logo=Next.js&logoColor=white">
 <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

## **❗ 문제상황 & 해결**
<ul>
 <li>Header및 하단 컨텐츠를 위한 레이아웃 설계에서 %로 잡을 때, 기준을 일정치 않게 잡으면서 레이아웃이 깨졌음</li>
 <div>ㄴ 공통 layout을 만들고 position속성을 부여한뒤 자식요소에 부모요소의 값을 상속시키고 calc속성을 사용하여 기준을 통일시킴</div>
  <br>
 <li>각 Card Container를 제작하는 과정에서, 반응형 CSS로 전환 시, 가로 세로 레이아웃의 규칙이 어긋났음
</li>
 <div>ㄴ switch문을 적용시켜 특정 조건에서변화 하는 css값들을 개별로 전달</div>
  <br>
 <li>처음 보고 개발하고 있던 화면이, 카카오는 매일 다른 소식으로 변경되고 있었음
</li>
 <div>ㄴ 대표적으로 구성되어 있는 layout들을 적절히 배치하여 화면을 구성함</div>
  <br>
 <li>Footer 및 Site Map 레이아웃에서 화면의 크기에 맞지 않는 Font Size로 Overflow가 발생했었음
</li>
 <div>ㄴ 각 Screen Width에 맞게 Font-Size를 재 조절 해줄 필요가 있었음</div>
  <br>
 <li>image별로 크기가 상이하고, 이미지가 들어가는 Card Container 역시 크기가 상이했음
</li>
 <div>ㄴ 그 당시의 화면이 다시 나오지 않았고, Card Container에 이미지 크기를 개별로 컨트롤 할 수 있게 함
</div>
 </ul>

## **📌 회고**
<ul>
 <li>단순히 정해진 레이아웃을 그대로 구현만 하면 되는 줄 알았지만, 웹 페이지는 정적형이 아닌 다양한 애니메이션과 기능들이 있었다.</li>
 <li>눈에 보이는 것만이 전부가 아니였기에, 초기 설계한 레이아웃에서 어긋난 부분이 많았고, 내가 구현한 CSS와 구현되어 있던 기존 사이트의 CSS의 차이가 있는 걸 보면서
다양한 방법이 있기에, 적절하게 사용할 수 있는 안목을 키워 나가야 한다는 생각이 들었다.</li>
 </ul>
 
