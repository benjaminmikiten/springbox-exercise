import React from "react";
import styled from "styled-components";
import HomeHero from "./components/HomeHero";
import PartnersSection from "./components/PartnersSection";
import OurSolutionsSection from "./components/OurSolutionsSection";
import Section from "../../components/Section";

const StyledHomePage = styled.div``;

const HomePage = () => {
  return (
    <StyledHomePage>
      <HomeHero />
      <PartnersSection />
      <OurSolutionsSection />
      {/* <CovidSolutionsSection /> */}
      <Section>COVID SECTION</Section>
      {/* GetInTouchSection */}
      <Section>GET IN TOUCH SECTION</Section>
      {/* PlatformSection */}
      <Section>PLATFORM SECTION</Section>
      {/* TrendingSection */}
      <Section>TRENDING SECTION</Section>
    </StyledHomePage>
  );
};

export default HomePage;
