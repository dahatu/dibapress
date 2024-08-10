/** @jsx jsx */
import React from "react";
import { jsx, useTheme } from "@emotion/react";
import { useConfig } from "stores/useConfig";
import { Theme } from "components/Dibapress";
import SidebarView from "components/admin/views/SidebarView";
import Color from "color";
import { CirclePicker } from "react-color";
import Button from "components/admin/elements/Button";
import Image from "next/image";

import { MenuIcon, PlusIcon, Scroll, ShuffleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { isBrowser, isMobile, isTablet } from "react-device-detect";
import { useClickAway } from "@uidotdev/usehooks";
import { AnimatePresence, color, motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars-2";

function Skeleton() {
  const config = useConfig();
  const theme = useTheme() as Theme;
  const pathName = usePathname();
  const [isMobileMode, setIsMobileMode] = React.useState(isMobile);

  const [floatingSidebarVisible, setFloatingSidebarVisible] =
    React.useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setFloatingSidebarVisible(false);
  });

  React.useEffect(() => {
    const mobileWidthMedia = window.matchMedia("(max-width: 768px)");
    setIsMobileMode(mobileWidthMedia.matches);
    mobileWidthMedia.addEventListener("change", (e) => {
      setIsMobileMode(e.matches);
      // setFloatingSidebarVisible(e.matches);
    });
  });

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        width: "100%",
      }}
    >
      {/* Sidebar */}
      {isBrowser && !isMobileMode && <SidebarView />}
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: 10,
          paddingInlineStart: isMobileMode ? 10 : 0,
          overflow: "auto",
        }}
      >
        <div
          css={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            boxShadow: `inset 0 0 0 1px ${Color(theme.colors.foreground)
              .alpha(0.05)
              .toString()}`,
            borderRight: "1px solid #0000",
            overflow: "auto",
            backgroundImage: `linear-gradient(${Color(theme.colors.accent)
              .alpha(0.01)
              .toString()} , transparent 50%)`,
            backgroundColor: Color(theme.colors.foreground)
              .alpha(0.02)
              .toString(),
          }}
        >
          <Scrollbars
            height={"100%"}
            width={"100%"}
            autoHide
            renderThumbVertical={() => {
              return (
                <div
                  css={{
                    width: 5,
                    borderRadius: 100,
                    backgroundColor: Color(theme.colors.foreground)
                      .alpha(0.1)
                      .toString(),
                  }}
                ></div>
              );
            }}
          >
            <div css={{ padding: 15, paddingTop: isMobileMode ? 100 : 15 }}>
              {isMobileMode && (
                <div
                  css={{
                    position: "fixed",
                    top: 20,
                    left: 20,
                    backgroundColor: theme.colors.accent,
                    color: "#fff",
                    padding: 10,
                    borderRadius: 50,
                    zIndex: 100,
                  }}
                  onClick={() =>
                    setFloatingSidebarVisible(!floatingSidebarVisible)
                  }
                >
                  <MenuIcon color="white" />
                </div>
              )}
              <AnimatePresence>
                {isMobileMode && floatingSidebarVisible && (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, left: -10 }}
                    animate={{ opacity: 1, left: 10 }}
                    exit={{ opacity: 0, left: -10 }}
                    transition={{ duration: 0.1 }}
                    css={{
                      position: "fixed",
                      top: 10,
                      height: "calc(100dvh - 20px)",
                      borderRadius: 10,
                      zIndex: 1000,
                      backgroundColor: theme.colors.background,
                    }}
                  >
                    <SidebarView
                      floated
                      onItemClick={() => {
                        setTimeout(() => {
                          setFloatingSidebarVisible(false);
                        }, 100);
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div
                css={{
                  fontSize: 25,
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div>Musics</div>
                <Button
                  css={{
                    fontSize: 12,
                    fontWeight: "normal",
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <PlusIcon size={16} /> New
                </Button>
              </div>
              <br />
              <br />
              <CirclePicker
                color={config.accentColor}
                onChange={(e) => {
                  config.updateAccentColor(e.hex);
                }}
                circleSize={20}
                circleSpacing={5}
                width="auto"
              />
              <br />
              <br />
              <div css={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <button
                  onClick={() => {
                    config.updateTheme("auto");
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
                css={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
                onClick={() => {
                  // alert("done");
                }}
              >
                <ShuffleIcon size={16} />
                Smart Shuffle
              </Button>
              <br />
              <br />
              <div style={{ minHeight: 3000 }}></div>
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
