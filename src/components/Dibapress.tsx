"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useConfig } from "../stores/useConfig";
import Button from "../components/ui/Button";

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
  const router = useRouter();
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
      <br />
      <div style={{ display: "flex", gap: 3 }}>
        <Button>+ Add Collection</Button>
        <Button>+ Add Taxonomy</Button>
        <Button>+ Add Tax Term</Button>
        <Button>+ Add User</Button>
      </div>
    </div>
  );
};

export default Dibapress;
