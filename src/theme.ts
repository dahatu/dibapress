import {
  extendTheme,
  ThemeComponentProps,
  ThemeOverride,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(<ThemeOverride>{
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    black: "#181612",
    white: "#ffffff",
    gray: {
      "50": "#fafaf9",
      "100": "#e5e5e4",
      "200": "#d9d7d6",
      "300": "#c6c3c1",
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
          borderColor: mode('#0002', '#fff1')(props),
          rounded: 10,
          _dark: {
            bg: "gray.900",
          },
        },
        item: {
          bg: "transparent",
          rounded: 7,
          _hover: {
            bg: mode("#0001", "#fff1")(props),
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
