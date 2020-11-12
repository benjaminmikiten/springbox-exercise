import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const BodyStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.background};
    ${({ theme }) => theme.textStyles.body};

    a{
      ${({ theme }) => theme.textStyles.link};
      transition: color .3s ease;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  h1, h2, h3, h4, h5, h6, p, li, ul{
    margin: 0;
    padding: 0;
  }

  *,
  *:after,
  *:before {
    /* I prefer border-box. */
    box-sizing: border-box;
  }

  html{
    /* Set 16px as 1rem */
    font-size: 16px;
  }
`;
