import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./style/Theme";
import { GlobalStyle, BodyStyle } from "./style/GlobalStyle";
import Layout from "./components/Layout";
import Routes from "./Routes";
function App() {
  return (
    <Theme>
      <GlobalStyle />
      <BodyStyle />
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Theme>
  );
}

export default App;
