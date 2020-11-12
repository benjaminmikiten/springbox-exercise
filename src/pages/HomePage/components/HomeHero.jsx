import React from "react";
import { Scene, Controller } from "react-scrollmagic";
import styled from "styled-components";
import HeroAnimation from "./HeroAnimation";

const StyledHomeHero = styled.section`
  width: 100%;
  position: relative;
`;

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
  // One whole frame of the scrolling header.
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
          <h2>We believe in automation with empathy</h2>
          <p>
            That means <strong>creating technology that provides a human touch between you and your patients</strong>. It’s what drives us to build conversational AI that’s intuitive to use, manage and scale, empowering you to offer care that goes beyond expectations.
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
      <Controller>
        <Scene duration={"100%"} triggerHook={"onLeave"}>
          {(progress) => (
            <>
              <HeroSections />
              <HeroAnimation progress={progress} />
            </>
          )}
        </Scene>
      </Controller>
    </StyledHomeHero>
  );
};

export default HomeHero;
