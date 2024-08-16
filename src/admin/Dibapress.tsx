import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Wrapper from "./views/Wrapper";
import { theme } from "../core/theme";

type Props = {
  config: any;
};

const Dibapress: React.FC<Props> = (props) => {
  return (
    <ChakraProvider theme={theme}>
      <Wrapper />
    </ChakraProvider>
  );
};

export default Dibapress;
