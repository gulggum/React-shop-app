# React Shop App 🛍️ [React 쇼핑몰 프로젝트]

🚧 현재 개발 중... 2025/12/15 ~

## 프로젝트 소개

React + Vite + TypeScript 기반 쇼핑몰 프로젝트

## 현재 구현 기능

- **헤더**

  - 다크/라이트 테마 토글 버튼
  - 모바일 햄버거 버튼 → 사이드바 토글

- **사이드바 컴포넌트**

  - 재사용 가능, 오버레이 + 슬라이드 애니메이션

- **아이콘 버튼 컴포넌트**

  - FontAwesome 아이콘과 클릭 이벤트 전달 가능

## 사용 기술

- React 18
- Vite
- TypeScript
- Styled-components
- Zustand (상태 관리 예정)
- FontAwesome

## 프로젝트 폴더/파일 구조

```plaintext
react-shop/
├─ public/
├─ src/
│ ├─ assets/          # 이미지, 아이콘 등
│ ├─ components/      # 재사용 가능한 컴포넌트
│ │ ├─ Header/        # 헤더, 테마 버튼 등
│ │ ├─ Sidebar/       # 사이드바 메뉴
│ │ └─ Button/        # 아이콘 버튼 등
│ ├─ pages/           # 페이지 단위 컴포넌트
│ │ └─ Home.tsx
│ ├─ state/           # Zustand 전역 상태 관리
│ │ ├─ sidebar.store.ts
│ │ └─ theme.store.ts
│ ├─ App.tsx
│ └─ main.tsx
├─ package.json
├─ tsconfig.json
└─ vite.config.js
```
