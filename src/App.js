import React from "react";
import Theme from "./style/Theme";
import { GlobalStyle, BodyStyle } from "./style/GlobalStyle";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <BodyStyle />
      {/* <Layout>
        <Routes />
      </Layout> */}
    </Theme>
  );
}

export default App;
