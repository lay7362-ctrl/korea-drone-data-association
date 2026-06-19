# 한국드론앤데이터협회

React + Vite로 만든 한국드론앤데이터협회 공식 홈페이지입니다.

## 메뉴

- 공지사항
- 협회가입
- 드론자격증교육신청
- 인력풀 가입

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포

`main` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가
Cloudflare Pages로 자동 배포합니다. 저장소 Secrets에
`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`가 등록되어 있어야 합니다.
