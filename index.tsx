import dynamic from "next/dynamic";
export const Dibapress = dynamic(() => import("./src/Dibapress"), {
  loading: () => <div>loading...</div>,
});
