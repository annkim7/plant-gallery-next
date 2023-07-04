# Plant Gallery

## 프로젝트 소개

Next.js 강좌를 듣고 배운 것을 복습해볼 겸, masonry 갤러리 레이아웃을 구현해보고 싶어서 작업해보게 되었다 Next-auth를 통해 session과 token으로 일반 회원 가입, 카카오 회원 가입을 구현했고 게시글이나 댓글 등을 회원전용으로 적용해 마이페이지에서 자신이 활동한 것을 모아 볼 수 있게 만들었다

### Skill

![plant-gallery](https://github.com/annkim7/plant-gallery-next/assets/67787776/ed640b84-1093-46e1-b932-f0d872b00030)

**_🥦 Next_**
MongoDB와 연결하여 서버 컴포넌트 구성
서버 쪽도 Type을 적용하여 컴파일시 에러를 줄이도록 노력했다

**_🥦 Next-auth_**
authOptions providers중 kakao를 연결,
일반 로그인은 클라이언트 컴포넌트에서 처리하도록 session으로 따로 provider 적용
next-auth type을 적용하여 개발단계에서 에러 처리 가능하도록 하였다

**_🥦 React-query_**
hydrate를 사용, 캐시 데이터를 이용하여 좀더 빠른 로딩을 추구
각 api별로 custom hook을 사용하여 모듈화시켜 유지보수성을 높임

**_🥦 Recoil_**
masonry 레이아웃 적용시 전체 데이터 갯수를 조정하도록 함

**_🥦 Tailwind_**
config를 추가하여 font-style을 커스텀

**_🥦 AWS-SDK_**
AWS S3를 연결하여 업로드한 이미지를 저장, 미리보기 기능, DB에 주소를 저장하여
데이터를 불러들이는 것에 무리가 없도록 설정

---

### Sample

|                                                     회원 가입                                                      |                                                    카카오 로그인                                                    |                                                    일반 로그인                                                     |
| :----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| ![add-member](https://github.com/annkim7/plant-gallery-next/assets/67787776/0c006b45-434c-4366-924f-fc0d0910ebef)  |    ![kakao](https://github.com/annkim7/plant-gallery-next/assets/67787776/f5a5a6c6-d314-4901-a10c-b49601e54e9f)     |    ![login](https://github.com/annkim7/plant-gallery-next/assets/67787776/d8bc2899-ec94-41cf-953e-ccf2c80e9510)    |
|                                                     회원 수정                                                      |                                                      회원 탈퇴                                                      |                                                    게시글 확인                                                     |
| ![edit-member](https://github.com/annkim7/plant-gallery-next/assets/67787776/f4a0131b-3d00-4cc3-9178-4c15616cca17) |  ![del-member](https://github.com/annkim7/plant-gallery-next/assets/67787776/ad996535-6989-4efe-bc24-08f32a9be561)  |  ![post-view](https://github.com/annkim7/plant-gallery-next/assets/67787776/399f47b5-98ba-4589-a0de-e2f351704f33)  |
|                                                    게시글 작성                                                     |                                                     게시글 수정                                                     |                                                    게시글 삭제                                                     |
|  ![add-post](https://github.com/annkim7/plant-gallery-next/assets/67787776/bdf47810-14f3-4c4c-ae19-b8923c5da28b)   |  ![edit-post](https://github.com/annkim7/plant-gallery-next/assets/67787776/91a7ccfc-f6a4-4b7b-b10b-1c2f504067eb)   |  ![del-post](https://github.com/annkim7/plant-gallery-next/assets/67787776/5bbdcc90-026d-44cf-83d5-99e18ca77385)   |
|                                                     댓글 작성                                                      |                                                      댓글 수정                                                      |                                                     댓글 삭제                                                      |
| ![add-comment](https://github.com/annkim7/plant-gallery-next/assets/67787776/02a066ae-c900-4839-83a3-c24bd47fd1cf) | ![edit-comment](https://github.com/annkim7/plant-gallery-next/assets/67787776/a6e65f07-ac29-4539-982d-9d9d8d2994f7) | ![del-comment](https://github.com/annkim7/plant-gallery-next/assets/67787776/e360acd5-3982-4819-8aa0-73818c739f1f) |
|                                                    좋아요 추가                                                     |                                                     좋아요 해제                                                     |                                                     마이페이지                                                     |
|  ![add-like](https://github.com/annkim7/plant-gallery-next/assets/67787776/71058f11-d9ee-4293-ad4a-1c42116485fc)   |   ![del-like](https://github.com/annkim7/plant-gallery-next/assets/67787776/046e07a3-494d-49fe-b4ee-43107693c427)   |   ![mypage](https://github.com/annkim7/plant-gallery-next/assets/67787776/c74b3b8f-e6db-43c4-9f46-630d8c646b05)    |
