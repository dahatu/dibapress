/** @jsx jsx */

import React from "react";
import { jsx, useTheme } from "@emotion/react";
import { useConfig } from "stores/useConfig";
import { Theme } from "components/Dibapress";
import LeftSideView from "components/admin/views/LeftSideView";
import Color from "color";
import { CirclePicker } from "react-color";
import Button from "components/admin/elements/Button";
import Image from "next/image";
// @ts-ignore
import Avatar from "assets/avatar.png";

function Skeleton() {
  const config = useConfig();
  const theme = useTheme() as Theme;

  const [visibleSidebar, setVisibleSidebar] = React.useState(true);

  React.useEffect(() => {
    const isMinSize = window.matchMedia("(max-width: 768px)");
    isMinSize.addEventListener("change", (e) => {
      setVisibleSidebar(!e.matches);
    });
  }, []);

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "row",
        justifyItems: "start",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      {/* Sidebar */}
      {/* {visibleSidebar && ( */}
      <div
        css={{
          width: 200,
          height: "100dvh",
          borderRight: "1px solid #0000",
          overflowX: "hidden",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          objectFit: "cover",
          backgroundColor: Color(theme.colors.foreground)
            .alpha(0.02)
            .toString(),
        }}
      >
        <div
          css={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={Avatar}
            alt={"avatar"}
            width={50}
            height={50}
            css={{ borderRadius: 100 }}
          />
          <div>Bahman World</div>
          <div><small>bahman.world@gmail.com</small></div>
        </div>
        <LeftSideView />
        <div css={{ flex: 1 }}></div>
        <div>settings</div>
      </div>
      {/* )} */}
      {/* Main Content */}
      <div style={{ height: "100dvh", flex: 1, padding: 20, overflow: "auto" }}>
        <div>Main Content</div>
        <br />
        <br />
        <CirclePicker
          color={config.accentColor}
          onChange={(e) => config.updateAccentColor(e.hex)}
          circleSize={30}
          circleSpacing={5}
          width="auto"
        />
        <br />
        <br />
        <div css={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <button
            onClick={() => {
              config.updateTheme("system");
            }}
          >
            System
          </button>
          <button
            onClick={() => {
              config.updateTheme("light");
            }}
          >
            Light
          </button>
          <button
            onClick={() => {
              config.updateTheme("dark");
            }}
          >
            Dark
          </button>
        </div>
        <div>current theme: {config.theme.toString()}</div>
        <br />
        <br />

        <Button
          onClick={() => {
            alert("done");
          }}
        >
          + New Music
        </Button>
        <div style={{ minHeight: 3000 }}></div>
      </div>
    </div>
  );
}

export default Skeleton;
