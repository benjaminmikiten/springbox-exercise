import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./style/Theme";
import { GlobalStyle, BodyStyle } from "./style/GlobalStyle";

import Routes from "./Routes";
function App() {
  return (
    <Theme>
      <GlobalStyle />
      <BodyStyle />
      <Router>
        <Routes />
      </Router>
    </Theme>
  );
}

export default App;
