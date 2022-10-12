# 원티드 프리온보딩 프론트엔드코스 사전과제

### 실행방법 : 배포링크

[netlify를 사용한 배포링크](https://chic-tulumba-a4fe1d.netlify.app/)


### 사용한 라이브러리 목록

create-react-app으로 설치된 라이브러리 제외
- react-router-dom
- styled-components
- axios

### 화면구성

- 로그인 페이지
![screencapture-chic-tulumba-a4fe1d-netlify-app-2022-10-12-18_37_29](https://user-images.githubusercontent.com/66970178/195307905-2a22d8a8-0774-4aa5-aa07-f62e7ab286b8.png)

요구조건에 맞는 이메일과 패스워드를 입력할 경우 signin 버튼이 빨간색에서 회색으로 바뀌며 클릭이 가능해짐. 

- 투두리스트
![screencapture-chic-tulumba-a4fe1d-netlify-app-todos-2022-10-12-18_36_58](https://user-images.githubusercontent.com/66970178/195307913-b153ddeb-8df3-42e4-be50-38bcf7654ee6.png)

### 개선점

- axios를 써서 서버와 통신하려했으나 post 요청에 '404 Not Found'라는 응답만 받음.
- 서버에 CRUD하는 기능을 구현하지 못하였음.
