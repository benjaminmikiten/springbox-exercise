import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  z-index: ${({ theme }) => theme.zIndexes.footer};
  background-color: ${({ theme }) => theme.colors.footerBackground};
  width: 100%;
  > div {
    ${({ theme }) => theme.grid.LayoutContainer}
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${({ theme }) => theme.colors.typeOnDark};
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>FOOTER CONTENT</div>
    </StyledFooter>
  );
};

export default Footer;
