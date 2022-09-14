import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0 auto;
    background-color: #fff;
    color: #555;
    font-family: "NanumBarunGothic";
    src: url("/fonts/NanumBarunGothic.otf");
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

  @font-face {
    font-family: "PretendardVariable";
    src: url("/fonts/PretendardVariable.ttf");
  }
`;
