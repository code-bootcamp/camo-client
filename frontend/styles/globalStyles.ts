import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    /* font-family: 'Nanum Pen Script', cursive; */
    src: url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
    src: url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Pen+Script&display=swap");
    font-family: "Inter", sans-serif;
    color: #333;
  }

  body {
    margin: 0;
    background-color: beige;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "Inter", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media (max-width: 767px) {
    font-size: 2em;
  }
`;

// @media (prefers-color-scheme: dark) {
//   html {
//     color-scheme: dark;
//   }
//   body {
//     color: white;
//     background: black;
//   }
// }
