import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div``;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </StyledLayout>
  );
};

export default Layout;
