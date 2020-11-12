import React, { useContext } from "react";
import styled from "styled-components";
import { ScrollWrapperContext } from "../../../components/ScrollWrapper";
const AnimationLayer = styled.div``;

const AnimationLayers = styled.div`
  width: 600px;
  height: 600px;
  background: red;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeroAnimation = styled.div`
  background: orange;
  width: 50%;
  position: absolute;
  height: 200vh;
  min-height: 2400px;
  top: 0;
  right: 0;
`;

const HeroAnimation = () => {
  const progress = useContext(ScrollWrapperContext);
  console.log(progress);
  return (
    <StyledHeroAnimation>
      <StickyWrapper>
        <AnimationLayers>
          {/* FOREGROUNDS, COME IN AND OUT FROM LEFT */}
          <AnimationLayer>FOREGROUND 1</AnimationLayer>
          <AnimationLayer>FOREGROUND 2</AnimationLayer>
          {/* ROTATING RING*/}
          <AnimationLayer>RING</AnimationLayer>
          {/* FOREGROUNDS, FADE IN AND OUT*/}
          <AnimationLayer>BACKGROUND 1</AnimationLayer>
          <AnimationLayer>BACKGROUND 2</AnimationLayer>
        </AnimationLayers>
      </StickyWrapper>
    </StyledHeroAnimation>
  );
};

export default HeroAnimation;
