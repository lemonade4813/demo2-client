# 카카오 API 활용 책 검색 구현(Front-end)(대흥정보 기술과제)

back-end repository: https://github.com/lemonade4813/demo2

back-end jar 파일 : https://drive.google.com/file/d/1sxA3TngcDVTPwnQuJKyfnxQtPjCjI6vf/view?usp=share_link

* 도서 검색 / 히스토리 / 인기 키워드 항목을 SPA 페이지로 구현하기 위해서 react 프레임워크를 사용합니다. 

## 실행방법

1. 해당 프로젝트를 clone후 npm install로 의존성 패키지를 설치합니다.

2. npm start로 프로젝트를 실행합니다.(기본포트 : 3000)


## 로그인 / 회원가입 

1. 실행 후 초기화면으로 로그인 페이지가 표시됩니다. 하단에 회원가입 버튼을 클릭하시면 회원가입 페이지로 이동됩니다.

2. 회원가입 페이지에서 아이디와 비밀번호를 입력 후 제출버튼을 누르면 가입된 아이디와 암호화된 비밀번호가 표시됩니다.
   이후 로그인 페이지로 이동됩니다.
   
3. 로그인 페이지에서 가입한 아이디와 비밀번호를 입력 후 제출 버튼을 클릭하면 로그인한 아이디가 표시됩니다
   (로컬스토리지에 아이디가 저장됩니다.)
   
   이후 도서 검색 페이지로 이동됩니다.
   
## 도서 검색 페이지

1. 키워드를 입력 후 검색 버튼을 누르시면 검색된 도서 정보가 표시됩니다.

2. 검색된 도서의 번호를 클릭하시면 상세 정보 확인이 가능합니다.

3. 검색 후 내 검색 히스토리/ 인기 키워드 목록 탭에서 조회 버튼을 누르시면 검색 정보를 확인 하실 수 있습니다.
