import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import HomePage from "./pages/HomePage/HomePage.jsx";
// import { SolutionsPage } from "./SolutionsPage";
// import { PlatformPage } from "./PlatformPage";
// import { ResourcesPage } from "./ResourcesPage";
// import { AboutPage } from "./AboutPage";
// import { ErrorPage } from "./pages/ErrorPage";
// ---

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path={"/solutions"} component={SolutionsPage} />
      <Route path={"/platform"} component={PlatformPage} />
      <Route path={"/resources"} component={ResourcesPage} />
      <Route path={"/about"} component={AboutPage} /> */}
      {/* <Route component={ErrorPage} /> */}
    </Switch>
  );
};

export default Routes;
