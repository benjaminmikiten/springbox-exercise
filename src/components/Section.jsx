import React from "react";
import styled from "styled-components";

const SectionStyle = styled.section``;

// export const SectionContext = React.createContext({});

const Section = ({ children }) => {
  return <SectionStyle>{children}</SectionStyle>;
};

export default Section;
