1. npm i 를 통해서 패키지 설치

2. package.json과 같은 레벨에 .env 파일을 생성하고 다음을 저장: MONGODB_URL=\<your mongodb url\>

3. mongoDB에 데이터 생성을 테스트하기 위해서 다음 명령어 실행: node populatedb \<your mongodb url\> _\*참고: OS에 따라 url에 작은따옴표나 큰따옴표가 필요_
