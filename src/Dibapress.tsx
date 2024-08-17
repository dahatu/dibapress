import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./theme";
import React from "react";
import { DibapressConfig, useDibapres } from "./useDibapress";

type Props = {
  config: DibapressConfig;
};

const Dibapress: React.FC<Props> = (props) => {

  const dibapress = useDibapres()
 
  React.useEffect(() => {
    dibapress.updateConfig(props.config)
  }, [])

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Dibapress;
