import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0 auto;
    /* background-color: #fff; */
    color: #555;
    font-family: "Anton", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("/fonts/NanumBarunGothic.otf");
  }

  @font-face {
    font-family: "Anton", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
  }
  @font-face {
    font-family: "Cafe24Ohsquare";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Cafe24Ohsquare.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "KOTRA_BOLD-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
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

  @font-face {
    font-family: "PretendardVariable";
    src: url("/fonts/PretendardVariable.ttf");
  }
  .MuiFormControl-root {
    width: 100% !important;
  }

  // 햄버거
  .MuiButton-root {
    padding: 0px;
    min-width: 0px;
    text-transform: none;
  }

  .MuiButton-text {
    padding: 0px;
  }
  .ant-btn {
    padding: none;
    position: fixed;
  }
`;
