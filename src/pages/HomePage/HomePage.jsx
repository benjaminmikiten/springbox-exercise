import React from "react";
import styled from "styled-components";
import HomeHero from "./components/HomeHero";
import PartnersSection from "./components/PartnersSection";
import OurSolutionsSection from "./components/OurSolutionsSection";

const StyledHomePage = styled.div``;

const HomePage = () => {
  return (
    <StyledHomePage>
      <HomeHero />
      <PartnersSection />
      <OurSolutionsSection />
      {/* <CovidSolutionsSection /> */}
      {/* GetInTouchSection */}
      {/* PlatformSection */}
      {/* TrendingSection */}
    </StyledHomePage>
  );
};

export default HomePage;
