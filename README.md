# Local-People
로컬들의 찐 정보 공유를 위한 위치(지역)기반 소셜 네트워크 웹 서비스

<img align="center" style="width:100rem; height:auto;" src="https://github.com/jeongmin1217/Local-People/blob/main/lcpp1.PNG"/>

## Functions
- 로그인/로그아웃 & 회원가입
- 게시물, 댓글, 좋아요 등 CRUD 작업
- 카카오맵 API를 활용한 가입위치 기반 게시물 업로드 지역 제한 (로컬들의 정보를 담고자)
- 회원가입일로부터 거주 일수 제공을 통한 유저 신뢰성 확보

## Architecture
- Front-end : React, Typescript, Redux
- DB : Firestore, Firebase realtime-database
- Cloud & Hosting : Firebase
