/** @jsx jsx */

import React from "react";
import { jsx, ThemeProvider } from "@emotion/react";
import Skeleton from "components/Skeleton";
import { SpinnerCircularFixed } from "spinners-react";
import { useConfig } from "stores/useConfig";

export type Theme = {
  colors: {
    accent: string;
    background: string;
    foreground: string;
  };
};

type Field = {
  key: string;
  type: "button" | "input" | "checkbox" | "radio" | "list";
};

type Collection = {
  key: string;
  name: string;
  fields: Field[];
};

type Config = {
  baseUrl: string;
  scheme?: Collection[];
};

type Props = {
  config: Config;
};

const Dibapress: React.FC<Props> = (props) => {
  const config = useConfig();
  const [loaded, setLoaded] = React.useState(false);

  const theme = React.useMemo((): Theme => {
    return {
      colors: {
        accent: config.accentColor,
        background: config.theme == "dark" ? "#111" : "#fff",
        foreground: config.theme == "dark" ? "#fff" : "#000",
      },
    };
  }, [config]);

  React.useEffect(() => {
    if (config) {
      setLoaded(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        id="dibapress"
        css={{
          fontSize: "80%",
          backgroundColor: theme.colors.background,
          color: theme.colors.foreground,
          userSelect: "none",
          msUserSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
        }}
      >
        {!loaded && (
          <SpinnerCircularFixed
            color={theme.colors.accent}
            secondaryColor="#ccc"
          />
        )}
        {loaded && <Skeleton />}
      </div>
    </ThemeProvider>
  );
};

export default Dibapress;
