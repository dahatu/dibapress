/** @jsx jsx */

import { jsx, useTheme } from "@emotion/react";
import { useConfig } from "stores/useConfig";
import color from "color";
import { Theme } from "components/Dibapress";

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
        backgroundColor: color(theme.colors.foreground).alpha(0.05).toString(),
        paddingBlock: 8,
        paddingInline: 10,
        borderRadius: 5,
        border: 'none',
        color: "#fff",
        ":hover": {
          backgroundColor: color(theme.colors.foreground).alpha(0.1).toString(),
        },
        ":active": {
          backgroundColor: color(theme.colors.foreground)
            .alpha(0.08)
            .toString(),
        },
      }}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
