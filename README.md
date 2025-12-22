# React Shop App 🛍️ [React 쇼핑몰 프로젝트]

🚧 현재 개발 중... 2025/12/15 ~

## 프로젝트 소개

React + Vite + TypeScript 기반 쇼핑몰 프로젝트

## 사용 기술

- React 18
- Vite
- TypeScript
- Styled-components
- Zustand (상태 관리 예정)
- FontAwesome

## 현재 구현 기능

- **헤더**

  - 다크/라이트 테마 토글 버튼
  - 모바일 햄버거 버튼 → 사이드바 토글

- **사이드바 컴포넌트**

  - 재사용 가능, 오버레이 + 슬라이드 애니메이션

- **아이콘 버튼 컴포넌트**

  - FontAwesome 아이콘과 클릭 이벤트 전달 가능

- **카테고리 추출 및 정규화**

  - 전체 상품 데이터를 받아 카테고리 배열 생성
  - "men's clothing"과 "women's clothing"을 "clothing"으로 통합
  - 중복 제거 후 고유 카테고리 반환

- **카테고리별 상품 페이지**

  - 의류(Fashion), 쥬얼리(Jewelery), 전자(Electronic) 페이지 구현
  - 각 페이지에서 카테고리별 상품 리스트 불러오기

- **ProductList 컴포넌트**

  - 공통 컴포넌트로 재사용 가능
  - 카테고리와 출력 제한(limit),(category) prop을 받아 상품 목록 렌더링
  - 반응형 Grid 레이아웃 적용
  - 이미지 중앙 정렬 및 hover 확대 효과

- **UI/UX**
  - 반응형 그리드: 화면 크기에 따라 칸 수 자동 조절

## 트러블 슈팅 기록

- [styled-components custom props DOM 경고 해결](https://velog.io/@gulggum/%EC%97%90%EB%9F%AC%EC%9D%BC%EA%B8%B0-styled-components-%EC%BB%A4%EC%8A%A4%ED%85%80-props%EA%B0%80-DOM%EC%9C%BC%EB%A1%9C-%EC%A0%84%EB%8B%AC%EB%90%98%EC%96%B4-%EB%B0%9C%EC%83%9D%ED%95%9C-React-%EA%B2%BD%EA%B3%A0)
- [React Query initialData 활용: 디테일 페이지 즉시 렌더링](https://velog.io/@gulggum/React-Query-initialData%EB%A1%9C-%EB%94%94%ED%85%8C%EC%9D%BC-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A6%89%EC%8B%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%ED%95%98%EA%B8%B0-%EC%BA%90%EC%8B%9C-%ED%99%9C%EC%9A%A9-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
  리스트 캐시 데이터를 임시로 보여주고, 백그라운드에서 디테일 API fetch로 최신화해 UX 개선

## 프로젝트 폴더/파일 구조

```plaintext
react-shop/
├─ public/
├─ src/
│ ├─ assets/          # 이미지, 아이콘 등
│ ├─ components/      # 재사용 가능한 컴포넌트
│ │ ├─ Header         # 헤더, 테마 버튼 등
│ │ ├─ Sidebar        # 사이드바 메뉴
│ │ └─ Button/        # 아이콘 버튼 등
│ ├─ pages/           # 페이지 단위 컴포넌트
│ │ └─ Home.tsx
│ ├─ state/           # Zustand 전역 상태 관리
│ │ ├─ sidebar.store.ts
│ │ └─ theme.store.ts
│ ├─ utils/           # 재사용 함수, 데이터 가공 로직
│ │ ├─ getCategories.ts
│ ├─ App.tsx
│ └─ main.tsx
├─ package.json
├─ tsconfig.json
└─ vite.config.js
```
