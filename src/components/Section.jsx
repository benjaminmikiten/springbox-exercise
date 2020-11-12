import React from "react";
import styled from "styled-components";

const SectionStyle = styled.section`
  min-height: 1200px;
  height: 100vh;
`;

// THIS IS JUST TO ADD HEIGHT TO THE PAGE FOR A REALISTIC IDEA OF SCROLL EFFECTS

const Section = ({ children }) => {
  return <SectionStyle>{children}</SectionStyle>;
};

export default Section;
