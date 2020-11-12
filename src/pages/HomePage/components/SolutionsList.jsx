import React from "react";
import styled from "styled-components";
import CTA from "../../../components/CTA";
import { motion, transform } from "framer-motion";

const SolutionsListItemContent = styled.div`
  padding-top: 30px;
  h3 {
    ${({ theme }) => theme.textStyles.mediumTitle};
    padding-bottom: 0.75rem;
  }
  p {
    ${({ theme }) => theme.textStyles.body};
    padding-bottom: 0.75rem;
  }
`;
const SolutionsListItemImage = styled.div`
  width: calc(100% * 60px);
  margin: 0 -30px;
  padding: 30px;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.5);
  &:before {
    display: block;
    content: "";
    padding-bottom: 75%;
  }
`;

const StyledSolutionsListItem = styled(motion.div)`
  ${({ theme }) => theme.grid.GridChild}
  width: calc(1/3 * 100%);
  height: 100%;
  position: relative;
  > div {
    height: 100%;
    border: solid 1px red;
  }

  &:nth-child(1) {
    z-index: 1;
  }
  &:nth-child(2) {
    z-index: 2;
  }
  &:nth-child(3) {
    z-index: 3;
  }
`;

const SolutionsListItem = ({ children, animate }) => {
  return (
    <StyledSolutionsListItem animate={animate}>
      <div>{children}</div>
    </StyledSolutionsListItem>
  );
};

const StyledSolutionsList = styled.div`
  ${({ theme }) => theme.grid.LayoutContainer}
  > div {
    ${({ theme }) => theme.grid.GridParent}
    align-items: stretch;
    position: relative;
  }
`;

const SolutionsList = ({ progress }) => {
  const listItemAnimation = (offsetStart) => ({
    opacity: progress,
    top: transform(progress, [0, 1], [offsetStart, "0%"]),
  });

  return (
    <StyledSolutionsList>
      <div>
        <SolutionsListItem animate={listItemAnimation("0%")} transition={{ delay: 0.0 }}>
          <SolutionsListItemImage></SolutionsListItemImage>
          <SolutionsListItemContent>
            <h3>The digital front door</h3>
            <p>
              Reach and engage patients through the technology they use every day with <strong>OrbitaENGAGE</strong>, a virtual concierge.
            </p>
            <CTA href={"#"}>Learn More</CTA>
          </SolutionsListItemContent>
        </SolutionsListItem>
        <SolutionsListItem animate={listItemAnimation("25%")} transition={{ delay: 0.3 }}>
          <SolutionsListItemImage></SolutionsListItemImage>
          <SolutionsListItemContent>
            <h3>The bedside assistant</h3>
            <p>
              Empower hands-free patient-provider communication through <strong>OrbitaASSIST</strong>'s AI-powered request prioritization and smart routing.
            </p>
            <CTA href={"#"}>Learn More</CTA>
          </SolutionsListItemContent>
        </SolutionsListItem>
        <SolutionsListItem animate={listItemAnimation("50%")} transition={{ delay: 0.6 }}>
          <SolutionsListItemImage></SolutionsListItemImage>
          <SolutionsListItemContent>
            <h3>The connected patient</h3>
            <p>
              Prep, inform and empower patients through personalized education, guidance and support, pre- and post-visit, with <strong>OrbitaCONNECT</strong>
            </p>
            <CTA href={"#"}>Learn More</CTA>
          </SolutionsListItemContent>
        </SolutionsListItem>
      </div>
    </StyledSolutionsList>
  );
};

export default SolutionsList;
