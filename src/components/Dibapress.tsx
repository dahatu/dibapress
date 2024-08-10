/** @jsx jsx */
import React from "react";
import { jsx, ThemeProvider } from "@emotion/react";
import Skeleton from "components/Skeleton";
import { SpinnerCircular, SpinnerCircularFixed, SpinnerCircularSplit } from "spinners-react";
import { useConfig } from "stores/useConfig";
import Color from "color";

export type Theme = {
  dark: boolean;
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
      dark: config.theme == "dark",
      colors: {
        accent: config.accentColor,
        background: config.theme == "dark" ? "#111" : "#fff",
        foreground: config.theme == "dark" ? "#fff" : "#000",
      },
    };
  }, [config]);

  React.useEffect(() => {
    if (config) {
      setTimeout(()=>{
        setLoaded(true);
      }, 500)
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        id="dibapress"
        css={{
          height: "100dvh",
          fontSize: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          color: theme.colors.foreground,
          userSelect: "none",
          msUserSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
        }}
      >
        {!loaded && (
          <SpinnerCircular
            color={theme.colors.accent}
            secondaryColor={Color(theme.colors.foreground).alpha(0.05).toString()}
            size={30}
            speed={250}
            />
        )}
        {loaded && <Skeleton />}
      </div>
    </ThemeProvider>
  );
};

export default Dibapress;
