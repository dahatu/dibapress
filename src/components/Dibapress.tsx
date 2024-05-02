"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useConfig } from "../stores/useConfig";
import Button from "../components/ui/Button";
import {Plus, UserPlus2} from 'lucide-react'

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
      <div style={{ display: "flex", gap: 6 }}>
        <Button><Plus size={16} style={{marginInlineEnd: -10}}/>Add Colly</Button>
        <Button>+ Add Taxonomy</Button>
        <Button>+ Add Tax Term</Button>
        <Button><UserPlus2 size={16} style={{marginInlineEnd: -10}}/> Add User</Button>
      </div>
    </div>
  );
};

export default Dibapress;
