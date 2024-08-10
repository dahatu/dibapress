/** @jsx jsx */
import React from 'react'
import { jsx, useTheme } from "@emotion/react";
import { useConfig } from "stores/useConfig";
import color from "color";
import { Theme } from "components/Dibapress";
import Color from 'color';

type Props = React.PropsWithChildren<
  {
    variant?:
      | "default"
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "danger";
  } & React.HTMLAttributes<HTMLButtonElement>
>;

const Button: React.FC<Props> = (props) => {
  const config = useConfig();
  const theme = useTheme() as Theme;

  return (
    <button
      css={{
        backgroundColor: theme.colors.accent,
        paddingBlock: 5,
        paddingInline: 10,
        borderRadius: 5,
        border: 'none',
        color:  "#fff",
        ":hover": {
          backgroundColor: color(theme.colors.accent).lighten(0.1).toString(),
        },
        ":active": {
          backgroundColor: color(theme.colors.accent).lighten(0.05).toString(),
        },
      }}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
