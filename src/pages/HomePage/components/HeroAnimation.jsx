import React from "react";
import styled from "styled-components";
import { motion, transform } from "framer-motion";

const AnimationLayer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: solid 1px white;
`;

const AnimationLayers = styled.div`
  width: 600px;
  height: 600px;
  background: red;
  position: relative;
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

const HeroAnimation = ({ progress }) => {
  // ring animation maps progress 0-1 to 0-180 deg rotation
  const ringAnimation = { transform: `rotate(${transform(progress, [0, 1], [0, 180])}deg)` };

  // foreground animations map progress 0-1 to left offset.
  const foregroundOutAnimation = { left: transform(progress, [0, 1], ["0%", "100%"]), opacity: transform(progress, [0, 1], [1, 0]) };
  const foregroundInAnimation = { left: transform(progress, [0, 1], ["100%", "0%"]), opacity: progress };

  // background animations map progress 0-1 to opacity .
  const backgroundOutAnimation = { opacity: transform(progress, [0, 1], [1, 0]) };
  const backgroundInAnimation = { opacity: progress };

  return (
    <StyledHeroAnimation>
      <StickyWrapper>
        <AnimationLayers>
          {/* FOREGROUNDS, COME IN AND OUT FROM LEFT */}
          <AnimationLayer animate={foregroundOutAnimation}>FOREGROUND 1</AnimationLayer>
          <AnimationLayer animate={foregroundInAnimation}>FOREGROUND 2</AnimationLayer>
          {/* ROTATING RING*/}
          <AnimationLayer animate={ringAnimation}>RING</AnimationLayer>
          {/* FOREGROUNDS, FADE IN AND OUT*/}
          <AnimationLayer animate={backgroundOutAnimation}>BACKGROUND 1</AnimationLayer>
          <AnimationLayer animate={backgroundInAnimation}>BACKGROUND 2</AnimationLayer>
          {/* SPEECH BUBBLE */}
        </AnimationLayers>
      </StickyWrapper>
    </StyledHeroAnimation>
  );
};

export default HeroAnimation;
