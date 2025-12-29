# React Shop App 🛍️ [React 쇼핑몰 프로젝트 클론코딩]

🔗 배포 주소: https://your-project-name.vercel.app

✅ 프로젝트 완료
📅 개발 기간: 2025/12/15 ~ 2025/12/24

## 프로젝트 소개

React + Vite + TypeScript 기반 쇼핑몰 프로젝트

## 사용 기술

- React 18
- Vite
- TypeScript
- React Router DOM v7
- React-query
- Styled-components
- Zustand (상태 관리 예정)
- FontAwesome
- Vercel (배포)

## 현재 구현 기능

- **상품 목록/상품 상세 데이터 fetch**
  - Fake Store API를 사용하여 상품 목록 및 상품 상세 데이터를 비동기로 처리
- **헤더 & 사이드바**
  - 다크/라이트 테마, 모바일 햄버거 사이드바 토글
- **아이콘 버튼 컴포넌트**
  - FontAwesome 아이콘 + 클릭 이벤트 지원
- **카테고리별 상품 페이지**
  - 의류, 쥬얼리, 전자 카테고리 구현
- **ProductList 컴포넌트**
  - 공통 컴포넌트, 반응형 Grid, 카테고리 필터 지원
- **디테일 페이지**
  - 상품 상세 정보 + 이미지, 별점 렌더링 + 장바구니 연동
- **UI/UX**
  - 반응형 레이아웃, 모바일 대응
  - Breadcrumb UI를 적용해 사용자가 현재 위치를 직관적으로 인지할 수 있도록 개선
- **장바구니**
  - Zustand로 상태 관리, persist 적용(장바구니유지), 아이템 수 배지와 총액 계산, 삭제/수량 조절 지원
- **검색기능**
  - useState 기반 자동완성 검색 구현, 검색 결과 리스트 스크롤 UX 적용

## 트러블 슈팅 기록

- [styled-components custom props DOM 경고 해결](https://velog.io/@gulggum/%EC%97%90%EB%9F%AC%EC%9D%BC%EA%B8%B0-styled-components-%EC%BB%A4%EC%8A%A4%ED%85%80-props%EA%B0%80-DOM%EC%9C%BC%EB%A1%9C-%EC%A0%84%EB%8B%AC%EB%90%98%EC%96%B4-%EB%B0%9C%EC%83%9D%ED%95%9C-React-%EA%B2%BD%EA%B3%A0)
- [React Query initialData 활용: 디테일 페이지 즉시 렌더링](https://velog.io/@gulggum/React-Query-initialData%EB%A1%9C-%EB%94%94%ED%85%8C%EC%9D%BC-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A6%89%EC%8B%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%ED%95%98%EA%B8%B0-%EC%BA%90%EC%8B%9C-%ED%99%9C%EC%9A%A9-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
  리스트 캐시 데이터를 임시로 보여주고, 백그라운드에서 디테일 API fetch로 최신화해 UX 개선

## 프로젝트 구조 (주요 폴더)

- `src/api/` : 외부 API 통신 로직 (상품 목록/상품 상세 데이터 fetch)
- `src/components/` : 재사용 가능한 UI 컴포넌트
- `src/pages/` : 페이지 단위 컴포넌트
- `src/state/` : Zustand 전역 상태 관리
- `src/utils/` : 유틸 함수 및 데이터 가공

## 배포

- Vercel을 사용하여 배포
- GitHub 저장소 연동 후 자동 배포 (CI/CD)
- main 브랜치 push 시 자동 빌드 및 배포
