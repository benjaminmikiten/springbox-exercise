import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const ScrollWrapperContext = React.createContext({});

const ScrollWrapper = ({ children, ...rest }) => {
  return (
    <Controller>
      <Scene {...rest}>
        {(progress) => {
          return <ScrollWrapperContext.Provider value={progress}>{children}</ScrollWrapperContext.Provider>;
        }}
      </Scene>
    </Controller>
  );
};

export default ScrollWrapper;
