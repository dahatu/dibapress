import {
  extendTheme,
  ThemeOverride,
  useFocusOnPointerDown,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const gray = {
  "50": "#FFFFFF",
  "100": "#E2E2E2",
  "200": "#C4C4C4",
  "300": "#A6A6A6",
  "400": "#888888",
  "500": "#6B6B6B",
  "600": "#4D4D4D",
  "700": "#2F2F2F",
  "800": "#202020",
  "900": "#151515",
};

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
    cssVarPrefix: "dibapress_",
  },
  colors: {
    gray,
    blue: {
      "50": "#e3f2fd",
      "100": "#bbdefb",
      "200": "#90caf9",
      "300": "#64b5f6",
      "400": "#42a5f5",
      "500": "#2196f3",
      "600": "#1e88e5",
      "700": "#1976d2",
      "800": "#1565c0",
      "900": "#0d47a1",
    },
    green: {
      "50": "#e8f5e9",
      "100": "#c8e6c9",
      "200": "#a5d6a7",
      "300": "#81c784",
      "400": "#66bb6a",
      "500": "#4caf50",
      "600": "#43a047",
      "700": "#388e3c",
      "800": "#2e7d32",
      "900": "#1b5e20",
    },
    red: {
      "50": "#ffebee",
      "100": "#ffcdd2",
      "200": "#ef9a9a",
      "300": "#e57373",
      "400": "#ef5350",
      "500": "#f44336",
      "600": "#e53935",
      "700": "#d32f2f",
      "800": "#c62828",
      "900": "#b71c1c",
    },
    orange: {
      "50": "#fff3e0",
      "100": "#ffe0b2",
      "200": "#ffcc80",
      "300": "#ffb74d",
      "400": "#ffa726",
      "500": "#ff9800",
      "600": "#fb8c00",
      "700": "#f57c00",
      "800": "#ef6c00",
      "900": "#e65100",
    },
    pink: {
      "50": "#fce4ec",
      "100": "#f8bbd0",
      "200": "#f48fb1",
      "300": "#f06292",
      "400": "#ec407a",
      "500": "#e91e63",
      "600": "#d81b60",
      "700": "#c2185b",
      "800": "#ad1457",
      "900": "#880e4f",
    },
    purple: {
      "500": "#8e43e7",
    },
    teal: {
      "500": "#1cc7d0",
    },
    cyan: {
      "500": "#49c0b6",
    },
    black: "#191919",
    white: "#ffffff",
  },
  styles: {
    global: (props) => ({
      "*": {
        fontSize: "sm",
      },
      body: {
        bg: mode("white", gray[900])(props),
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: 6,
      },
      defaultProps: {
        size: "sm",
      },
    },
    Menu: {
      defaultProps: {
        variant: "ghost",
        size: "sm",
      },
      baseStyle: (props) => ({
        icon: {
          mt: -0.5,
        },
        groupTitle: {
          mx: 3,
          my: 1,
          opacity: 0.5,
          fontSize: "xs",
        },
        list: {
          bg: mode("white", gray[700])(props),
          px: 1,
          py: 1,
          border: "none",
          borderRadius: 8,
          boxShadow: `1px 3px 9px #0005, inset 0 0 0 0.5px #0002`,
        },
        item: {
          borderRadius: 5,
          py: 1,
          px: 2,
          fontWeight: "600",
          bg: mode("white", gray[700])(props),
          _focus: {
            bg: gray[100],
            _dark: {
              bg: gray[800], 
            },
          },
        },
        divider: {
          borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
          my: 1,
          mx: -1,
        },
      }),
    },
    Popover: {
      baseStyle: (props) => ({
        body: {
          bg: mode("white", gray[800])(props),
          borderRadius: 10,
        },
        content: {
          p: 2,
          bg: mode("white", gray[800])(props),
          border: "none",
          borderRadius: 10,
          boxShadow: `1px 3px 9px #0005, inset 0 0 0 0.5px #0002`,
        },
        header: {
          p: 2,
          border: "none",
          fontWeight: "bold",
        },
        closeButton: {
          m: 2,
        },
      }),
    },
    Table: {
      baseStyle: (props) => ({
        table: {
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: `1px 2px 8px #0000, inset 0 0 0 0.5px ${mode(
            gray[200],
            gray[700]
          )(props)}`,
        },
        th: {
          bg: mode("#00000006", "#ffffff05")(props),
          borderRight: "1px solid #fff1",
        },
        td: {
          borderRight: "1px solid #fff1",
        },
      }),
    },
    Checkbox: {
      baseStyle: {
        control: {
          transition: "all 0.2s ease",
          rounded: 5,
          borderWidth: 1,
          w: 5,
          h: 5,
        },
      },
    },
    Radio: {
      baseStyle: {
        label: {
          fontSize: "xs",
        },
        control: {
          borderWidth: 1,
          transition: "all 0.2s ease",
        },
      },
    },
    Switch: {
      defaultProps: {},
    },
  },
} as ThemeOverride);

export { theme };
