/** @jsx jsx */
import { jsx } from "@emotion/react";

function Button() {
  return <button css={{ backgroundColor: "blue", ":hover": {
    backgroundColor: 'green'
  } }}>Button #2</button>;
}

export default Button;
