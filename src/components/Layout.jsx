import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledLayout = styled.div``;

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
