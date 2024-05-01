"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

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
  collections?: [];
};

type Props = {
  config: Config;
};

const Dibapress: React.FC<Props> = (props) => {
  const router = useRouter();
  const path = usePathname();
  const [baseUrl, setBaseUrl] = React.useState(
    props.config?.baseUrl || "/admin"
  );

  return (
    <div id="dibapress">
      <div>Dibapress UI Kit goes here</div>
      {path == `${baseUrl}/posts` && <div>Here is posts page</div>}
      <Link href={`${baseUrl}/posts`}>Go to Posts</Link>
    </div>
  );
};

export default Dibapress;
