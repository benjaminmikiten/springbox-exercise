import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  z-index: ${({ theme }) => theme.zIndexes.footer};
  width: 100%;
  > div {
    ${({ theme }) => theme.grid.LayoutContainer}
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: solid 1px green;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>{/* FOOTER CONTENTS */}</div>
    </StyledFooter>
  );
};

export default Footer;
