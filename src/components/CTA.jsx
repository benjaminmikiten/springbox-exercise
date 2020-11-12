import React from "react";
import styled, { css } from "styled-components";

const StyledCTA = styled.a`
  ${({ theme }) => css`
    background-image: linear-gradient(to bottom, transparent 0%, transparent 50%, ${theme.colors.sunflower} 50%);
  `};

  background-size: 100% 200%;
  transition: all 0.3s ease;
  background-position: 100% 50%;

  display: inline-block;
  padding: 0.5em 1em;

  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.type};
  @media (hover: hover) {
    &:hover {
      background-position: 100% 100%;
      color: ${({ theme }) => theme.colors.type};
    }
  }
  span {
    padding-left: 0.25em;
  }
`;

const CTA = ({ children, ...rest }) => {
  // TODO: SVG for arrow in span
  // TOOD: :before for tan rectangle
  return (
    <StyledCTA {...rest}>
      {children}
      <span>➞</span>
    </StyledCTA>
  );
};

export default CTA;
