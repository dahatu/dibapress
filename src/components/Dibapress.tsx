/** @jsx jsx */
import React from "react";
import { jsx, ThemeProvider } from "@emotion/react";
import Skeleton from "components/Skeleton";
import { SpinnerCircular } from "spinners-react";
import Head from "next/head";
import { useConfig } from "stores/useConfig";
import Color from "color";

import { Metadata } from "next";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Dibapress | Dashboard",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export type Theme = {
  dark: boolean;
  colors: {
    accent: string;
    background: string;
    foreground: string;
    card: string;
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
  const pathName = usePathname();
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    darkMedia.addEventListener("change", (e) => {
      config.updateTheme(e.matches ? "dark" : "light");
    });
  }, []);

  const theme = React.useMemo((): Theme => {
    return {
      dark: config.theme == "dark",
      colors: {
        accent: config.accentColor,
        background: config.theme == "dark" ? "#111" : "#fff",
        foreground: config.theme == "dark" ? "#fff" : "#000",
        card: config.theme == "dark" ? "#111" : "#eee",
      },
    };
  }, [config]);

  React.useEffect(() => {
    if (config) {
      setTimeout(() => {
        setLoaded(true);
        if (pathName.split("/").length == 2) {
          window.history.pushState(
            {},
            null,
            `/${config.baseUrl}/${config.defaultRoute}`
          );
        }
      }, 500);
    }
  }, []);

  React.useEffect(() => {
    const themeColor = document.createElement("meta");
    themeColor.name = "theme-color";
    themeColor.content = "#111";
    document.head.appendChild(themeColor);
  }, [theme]);

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
          colorScheme: theme.dark ? 'dark' : 'light', 
          "a:hover": {
            color: theme.colors.accent,
            textDecoration: "underline",
          },
        }}
      >
        {!loaded && (
          <SpinnerCircular
            color={theme.colors.accent}
            secondaryColor={Color(theme.colors.foreground)
              .alpha(0.05)
              .toString()}
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
