import {
  extendTheme,
  ThemeComponentProps,
  ThemeOverride,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(<ThemeOverride>{
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: {
    black: "#181612",
    white: "#ffffff",
    // gray: {
    //   "50": "#fafafa",
    //   "100": "#e8e8e8",
    //   "200": "#e2e2e2",
    //   "300": "#d4d4d4",
    //   "400": "#a3a3a3",
    //   "500": "#737373",
    //   "600": "#525252",
    //   "700": "#404040",
    //   "800": "#262626",
    //   "900": "#151515",
    // },
    gray: {
      "50": "#fafaf9",
      "100": "#e5e5e4",
      "200": "#e9e7e6",
      "300": "#d6d3d1",
      "400": "#a8a29e",
      "500": "#78716c",
      "600": "#57534e",
      "700": "#44403c",
      "800": "#292524",
      "900": "#1c1917",
    },
    orange: {
      "50": "#fff7ed",
      "100": "#fef3c7",
      "200": "#fde68a",
      "300": "#fcd34d",
      "400": "#fbbf24",
      "500": "#f59e0b",
      "600": "#d97706",
      "700": "#b45309",
      "800": "#92400e",
      "900": "#78350f",
    },
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      "*": { fontSize: "sm" },
      body: {
        p: 0,
        m: 0,
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "md",
      },
      defaultProps: {
        variant: "ghost",
        size: "sm",
      },
    },
    Menu: {
      baseStyle: (props: ThemeComponentProps) => ({
        list: {
          p: 1,
          mt: -1,
          border: "1px solid",
          rounded: "md",
          borderColor: mode("#0002", "#fff1")(props),
          _dark: {
            bg: "gray.900",
          },
        },
        item: {
          bg: "transparent",
          rounded: "md",
          _hover: {
            bg: mode("gray.100", "gray.800")(props),
          },
        },
        divider: {
          m: 2,
          bg: mode("gray.50", "gray.900")(props),
        },
      }),
    },
  },
});

export { theme };

// 0 1 2 3 4 5 6 7 8 9 a b c d e f
