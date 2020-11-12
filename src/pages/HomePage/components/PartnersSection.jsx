import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { motion, transform } from "framer-motion";

const StyledPartnerItem = styled.li`
  padding: 0 20px;
  > div {
    background: grey;
    height: 160px;
    width: 300px;
  }
`;

const PartnerItems = styled(motion.ul)`
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  display: flex;
`;

const PartnerItemsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const PartnerItem = () => {
  return (
    <StyledPartnerItem>
      <div></div>
    </StyledPartnerItem>
  );
};

const PartnersSectionStyles = styled.section`
  padding: 120px 0;
  position: relative;
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
  }
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.grid.LayoutContainer};
  h2 {
    ${({ theme }) => theme.textStyles.largeTitle};
    padding-bottom: 1rem;
  }
`;

const StyledProgressBar = styled.div`
  width: 100%;
  position: relative;
  height: 8px;
  padding-top: 4rem;
`;

const Bar = styled(motion.div)`
  position: absolute;
  height: 4px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.orange};
`;
const Dot = styled(motion.div)`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.carrot};
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ProgressBar = ({ progress }) => {
  const dotAnimation = { left: transform(progress, [0, 1], ["0%", "80%"]) };
  const barAnimation = { width: transform(progress, [0, 1], ["0%", "80%"]) };
  return (
    <StyledProgressBar>
      <Bar animate={barAnimation} />
      <Dot animate={dotAnimation} />
    </StyledProgressBar>
  );
};

const PartnersSection = () => {
  return (
    <Controller>
      <Scene duration={"100%"} triggerHook={"onEnter"}>
        {(progress) => {
          const itemsAnimation = { left: transform(progress, [0, 1], ["25%", "-25%"]) };
          console.log("partners prog", progress);
          return (
            <PartnersSectionStyles progress={progress}>
              <SectionTitle>
                <h2>Trusted by:</h2>
              </SectionTitle>
              <PartnerItemsWrapper>
                <PartnerItems animate={itemsAnimation}>
                  <PartnerItem />
                  <PartnerItem />
                  <PartnerItem />
                  <PartnerItem />
                  <PartnerItem />
                </PartnerItems>
              </PartnerItemsWrapper>
              <ProgressBar progress={progress} />
            </PartnersSectionStyles>
          );
        }}
      </Scene>
    </Controller>
  );
};

export default PartnersSection;
