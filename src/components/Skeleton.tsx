import React from "react";
import {
  Home,
  Home2,
  Music,
  MusicLibrary2,
  PictureFrame,
  Setting4,
  User,
  Video,
} from "iconsax-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { HexColorPicker } from "react-colorful";
import { useConfig } from "../stores/useConfig";
import Button from "../elements/Button";

//@ts-ignore
import Avatar from "../assets/avatar.png";

function Skeleton() {
  const config = useConfig();
  const [visibleSidebar, setVisibleSidebar] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    const isMinSize = window.matchMedia("(max-width: 768px)");
    isMinSize.addEventListener("change", (e) => {
      setVisibleSidebar(!e.matches);
    });
  }, []);

  const items = React.useMemo(() => {
    return [
      {
        id: Math.random(),
        type: "menu-item",
        title: "Dashboard",
        icon: <Home variant="Bulk" size={20} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Musics",
        icon: <Music variant="Bulk" size={20} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Videos",
        icon: <Video variant="Bulk" size={20} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Albums",
        icon: <MusicLibrary2 variant="Bulk" size={20} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Artists",
        icon: <User variant="Bulk" size={20} />,
      },
      {
        id: Math.random(),
        type: "divider",
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Media",
        icon: <PictureFrame variant="Bulk" size={20} />,
      },
      {
        id: Math.random(),
        type: "spacer",
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Settings",
        icon: <Setting4 variant="Bulk" size={20} />,
      },
    ];
  }, [config.accentColor]);

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
      {visibleSidebar && (
        <div
          style={{
            width: 220,
            height: "100dvh",
            borderRight: "1px solid #0000",
            overflowX: "hidden",
            overflowY: "auto",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: 5,
              padding: 10,
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                backgroundColor: "#ffffff08",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Image
                src={Avatar}
                width={30}
                height={30}
                alt="user-avatar"
                style={{ borderRadius: 8 }}
              />
              <div>
                <div style={{ fontWeight: "bold", marginBottom: -4 }}>
                  Bahman World
                </div>
                <div style={{ opacity: 0.5 }}>
                  <small style={{ fontSize: 9 }}>bahman.world@gmail.com</small>
                </div>
              </div>
            </div>

            <div
              style={{
                paddingBlock: 10,
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              {items.map((item, index) => {
                if (item.type == "spacer") {
                  return <div style={{ flex: 1 }}></div>;
                }
                if (item.type == "divider") {
                  return (
                    <div
                      style={{
                        height: 1,
                        backgroundColor: "#0005",
                        opacity: 0.2,
                        marginBlock: 10,
                      }}
                    >
                      {item.title}
                    </div>
                  );
                }
                return (
                  <div
                    onClick={() => {
                      setSelectedItem(index);
                    }}
                    key={item.id}
                    className="sidebar-item"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      padding: 10,
                      opacity: index == selectedItem ? 1 : 0.8,
                    }}
                  >
                    <div
                      style={{
                        marginTop: -3,
                        color:
                          selectedItem == index
                            ? config.accentColor
                            : "inherit",
                        opacity: selectedItem == index ? 1 : 0.5,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        color:
                          selectedItem == index
                            ? config.accentColor
                            : "inherit",
                      }}
                    >
                      {item.title}
                    </div>
                    <ChevronRight
                      size={14}
                      color={
                        selectedItem == index ? config.accentColor : "inherit"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <div style={{ height: "100dvh", flex: 1, padding: 20, overflow: "auto" }}>
        <div>Main Content</div>
        <HexColorPicker
          color={config.accentColor}
          onChange={config.updateAccentColor}
        />
        <br />
        <Button />
        <div style={{ minHeight: 3000 }}></div>
      </div>
    </div>
  );
}

export default Skeleton;
