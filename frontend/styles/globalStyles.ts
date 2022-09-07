import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0 auto;
    /* 패딩 15%는 각 페이지에서 콘텐츠가 들어가는 박스 스타일에 줘야함 */
    background-color: #fff;
    color: #555;
    /* font-family: "NanumBarunGothic", sans-serif; */
    font-family: "Anton", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
    /* src: url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Pen+Script&display=swap"); */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "JUA";
    src: url("/fonts/JUA.otf");
  }
  @font-face {
    font-family: "DH";
    src: url("/fonts/DH.otf");
  }
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("/fonts/NanumBarunGothic.otf");
  }
`;
