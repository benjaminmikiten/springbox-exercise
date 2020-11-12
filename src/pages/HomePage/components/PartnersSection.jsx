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
  border: solid 1px red;
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
`;

const PartnersSection = () => {
  return (
    <Controller>
      <Scene duration={"100%"} triggerHook={"onEnter"}>
        {(progress) => {
          const itemsAnimation = { left: transform(progress, [0, 1], ["25%", "-25%"]) };
          console.log("partners prog", progress);
          return (
            <PartnersSectionStyles>
              <PartnerItemsWrapper>
                <PartnerItems animate={itemsAnimation}>
                  <PartnerItem />
                  <PartnerItem />
                  <PartnerItem />
                  <PartnerItem />
                  <PartnerItem />
                </PartnerItems>
              </PartnerItemsWrapper>
            </PartnersSectionStyles>
          );
        }}
      </Scene>
    </Controller>
  );
};

export default PartnersSection;
