import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./theme";
import React from "react";
import { useDibapres, DibapressConfig } from "./store/useDibapress";

type Props = {
  config: DibapressConfig;
};

const Dibapress: React.FC<Props> = (props) => {
  const dibapress = useDibapres();



  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Dibapress;
