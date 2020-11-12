import React from "react";
import styled from "styled-components";
import ScrollWrapper from "../../../components/ScrollWrapper";
const StyledHomeHero = styled.section``;

const HeroSectionContent = styled.div`
  // A container for the title and blurb
  width: calc(1 / 3 * 100%);

  h2 {
    ${({ theme }) => theme.textStyles.largeTitle};
    padding-bottom: 1rem;
  }
  p {
    ${({ theme }) => theme.textStyles.body};
  }
`;

const StyledHeroSection = styled.div`
  // One whole frame of the scrolling header.

  height: 100vh;
  min-height: 1200px;
  border: solid 1px red;

  > div {
    padding: 90px 0;
    ${({ theme }) => theme.grid.LayoutContainer};
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const HeroSection = ({ children }) => {
  return (
    <StyledHeroSection>
      <div>{children}</div>
    </StyledHeroSection>
  );
};

const HeroSections = () => {
  return (
    <div>
      <HeroSection>
        <HeroSectionContent>
          <h2>Conversational AI that redefines the patient journey</h2>
          <p>
            Our HIPAA-compliant virtual assistants mirror human behavior to effectively serve patients — from appointments to outcomes. This increases efficiency and reduces cost, allowing you to <strong>enable real change across your organization.</strong>
          </p>
        </HeroSectionContent>
      </HeroSection>
      <HeroSection>
        <HeroSectionContent>
          <h2>Conversational AI that redefines the patient journey</h2>
          <p>
            Our HIPAA-compliant virtual assistants mirror human behavior to effectively serve patients — from appointments to outcomes. This increases efficiency and reduces cost, allowing you to <strong>enable real change across your organization.</strong>
          </p>
        </HeroSectionContent>
      </HeroSection>
    </div>
  );
};

// const HeroAnimation = () => {};

//

const HomeHero = () => {
  return (
    <StyledHomeHero>
      <ScrollWrapper>
        <HeroSections />
        {/* <HeroAnimation /> */}
      </ScrollWrapper>
    </StyledHomeHero>
  );
};

export default HomeHero;
