"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { useConfig } from "../stores/useConfig";
import Button from "./ui/Button";
import { ThemeProvider, useTheme } from "styled-components";

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
  collections?: Collection[];
};

type Props = {
  config: Config;
};

const Dibapress: React.FC<Props> = (props) => {
  const config = useConfig();
  const path = usePathname();
  const [baseUrl, setBaseUrl] = React.useState(
    props.config?.baseUrl || "/admin"
  );

  React.useLayoutEffect(() => {
    config.updateBaseUrl(props.config.baseUrl);
  }, []);

  return (
    <div id="dibapress" style={{ padding: 20 }}>
      <div className="font-bold text-xl">Dibapress UI Kit goes here</div>
      {path == `${baseUrl}/posts` && <div>Here is posts page</div>}
      <br />
      <div style={{ display: "flex", gap: 3 }}>
        <Button>+ Add Collection</Button>
        <Button>+ Add Taxonomy</Button>
        <Button>+ Add Term</Button>
        <Button>+ Add User</Button>
      </div>
      <br />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path
            fill="red"
            stroke="none"
            d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
          />
        </clipPath>
      </svg>
    </div>
  );
};

export default Dibapress;
