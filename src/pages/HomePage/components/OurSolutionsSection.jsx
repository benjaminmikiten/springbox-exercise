import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";
import { motion, transform } from "framer-motion";
import SolutionsList from "./SolutionsList";

// ==========

const SectionBody = styled.div``;
const SectionTitle = styled(motion.div)`
  text-align: center;
  padding-bottom: 4rem;
  h2 {
    ${({ theme }) => theme.textStyles.largeTitle};
  }
`;

const OurSolutionsSectionStyles = styled.section`
  padding: 120px 0;
`;

const OurSolutionsSection = () => {
  return (
    <Controller>
      <Scene duration={"100%"} triggerHook={"onEnter"}>
        {(progress) => {
          return (
            <OurSolutionsSectionStyles>
              <SectionTitle animate={{ opacity: transform(progress, [0, 0.5, 1], [0, 1, 1]) }}>
                <h2>Uplevel care at every step with our solutions</h2>
              </SectionTitle>
              <SectionBody>
                <SolutionsList progress={progress} />
              </SectionBody>
            </OurSolutionsSectionStyles>
          );
        }}
      </Scene>
    </Controller>
  );
};

export default OurSolutionsSection;
