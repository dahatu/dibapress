import React from "react";
import { useConfig } from "../stores/useConfig";
import Skeleton from "./Skeleton";
import { SpinnerCircularFixed } from "spinners-react";

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

  const config = useConfig();

  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(()=>{
    if (config) {
      setLoaded(true)
    }
  }, [])

  return (
    <div id="dibapress">
      {!loaded && <SpinnerCircularFixed color={config.accentColor} secondaryColor="#ccc"/>}
      {loaded && <Skeleton />}
    </div>
  );
};

export default Dibapress;
