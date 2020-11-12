import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  header {
    flex: 0 0 auto;
  }
  main {
    flex: 1 0 auto;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
