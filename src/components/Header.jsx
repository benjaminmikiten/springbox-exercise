import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  z-index: ${({ theme }) => theme.zIndexes.header};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  // TODO: make sure this can get shared with components that need to know how high the header is.
  > div {
    ${({ theme }) => theme.grid.LayoutContainer}
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: solid 1px green;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        LOGO
        {/* <Logo /> */}
        NAVIGATION
        {/* <Navigation /> */}
        DEMO BUTTON
        {/* <DemoButton /> */}
      </div>
    </StyledHeader>
  );
};

export default Header;
