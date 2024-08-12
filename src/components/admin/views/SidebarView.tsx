/** @jsx jsx */
import React from "react";
import { jsx, useTheme } from "@emotion/react";
import { Theme } from "components/Dibapress";
import { useConfig } from "stores/useConfig";
import {
  AlbumIcon,
  BookOpenTextIcon,
  ChevronRight,
  ChevronsUpDownIcon,
  DnaIcon,
  DropletIcon,
  FileIcon,
  HomeIcon,
  InboxIcon,
  Layers2Icon,
  LogOutIcon,
  MicIcon,
  MusicIcon,
  PencilIcon,
  PlugIcon,
  PodcastIcon,
  Settings2Icon,
  SettingsIcon,
  ShieldIcon,
  StickyNoteIcon,
  TagIcon,
  UploadIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";
import Color from "color";
import { usePathname } from "next/navigation";
import { Scrollbars } from "react-custom-scrollbars-2";
import { AnimatePresence, motion, stagger } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";
// @ts-ignore
import Avatar from "../../../assets/avatar.png";
import { title } from "process";

type SlideMenuItemProps = {
  href: any;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hasArrow?: boolean;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  selected?: boolean;
  badge?: any;
};

const SlideMenuItem: React.FC<SlideMenuItemProps> = (props) => {
  const theme = useTheme() as Theme;

  return (
    <div
      onClick={props.onClick}
      className="sidebar-item"
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        gap: 5,
        paddingInline: 10,
        paddingBlock: 8,
        borderRadius: 5,
        opacity: props.selected ? 1 : 0.8,
        color: props.selected
          ? theme.dark
            ? Color(theme.colors.accent).lighten(0.3).toString()
            : Color(theme.colors.accent).darken(0.3).toString()
          : theme.colors.foreground,
        backgroundColor: props.selected
          ? Color(theme.colors.accent).alpha(0.2).toString()
          : "transparent",
        "&:hover": {
          backgroundColor: props.selected
            ? undefined
            : Color(theme.colors.foreground).alpha(0.08).toString(),
        },
      }}
    >
      <div>{props.icon}</div>
      <div
        css={{
          flex: 1,
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div css={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div>{props.title}</div>
            {props.subtitle && (
              <div css={{ fontSize: 9, opacity: 0.6, marginTop: -3 }}>
                {props.subtitle}
              </div>
            )}
          </div>
          {props.badge > 0 && (
            <div
              css={{
                fontSize: 9,
                backgroundColor: theme.colors.accent,
                color: "#fff",
                paddingBlock: 0,
                paddingInline: 5,
                borderRadius: 10,
              }}
            >
              {props.badge.toLocaleString()}
            </div>
          )}
        </div>
      </div>
      {props.rightIcon}
      {props.hasArrow && (
        <ChevronRight
          size={16}
          strokeWidth={props.selected ? 3 : 2}
          opacity={props.selected ? 1 : 0.5}
        />
      )}
    </div>
  );
};
type SidebarMenuProps = {
  onItemClick?: () => void;
};

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  const config = useConfig();
  const theme = useTheme() as Theme;
  const pathNames = usePathname();

  const names = React.useMemo(() => pathNames.split("/"), [pathNames]);

  const items = React.useMemo(() => {
    return [
      {
        id: Math.random(),
        type: "section",
        title: "Gettings Started",
      },
      {
        id: "dashboard",
        type: "menu-item",
        title: "Dashboard",
        subtitle: "Updates are avaliable",
        icon: <HomeIcon size={16} />,
        count: 2,
      },
      {
        id: "settings",
        type: "menu-item",
        title: "Settings",
        subtitle: "",
        icon: <Settings2Icon size={16} />,
        count: 0,
      },
      {
        id: Math.random(),
        type: "section",
        title: "Collections",
      },
      {
        id: "post",
        type: "menu-item",
        title: "Posts",
        subtitle: "You can add new articles",
        icon: <Layers2Icon size={16} />,
        count: 3,
      },
      {
        id: "page",
        type: "menu-item",
        title: "Pages",
        subtitle: "",
        icon: <StickyNoteIcon size={16} />,
        count: 32,
      },
      {
        id: "music",
        type: "menu-item",
        title: "Musics",
        subtitle: "",
        icon: <MusicIcon size={16} />,
        count: 32,
      },
      {
        id: "video",
        type: "menu-item",
        title: "Videos",
        subtitle: "",
        icon: <VideoIcon size={16} />,
        count: 0,
      },
      {
        id: "album",
        type: "menu-item",
        title: "Albums",
        subtitle: "",
        icon: <AlbumIcon size={16} />,
        count: 11,
      },
      {
        id: "podcast",
        type: "menu-item",
        title: "Podcasts",
        subtitle: "",
        icon: <PodcastIcon size={16} />,
        count: 0,
      },
      {
        id: "artist",
        type: "menu-item",
        title: "Artists",
        subtitle: "",
        icon: <MicIcon size={16} />,
        count: 0,
      },
      {
        id: Math.random(),
        type: "section",
        title: "Taxonomies",
      },
      {
        id: "genre",
        type: "menu-item",
        title: "Genres",
        subtitle: "",
        icon: <DropletIcon size={16} />,
        count: 0,
      },
      {
        id: "tag",
        type: "menu-item",
        title: "Tags",
        subtitle: "",
        icon: <TagIcon size={16} />,
        count: 0,
      },
      {
        id: Math.random(),
        type: "section",
        title: "Assets",
      },
      {
        id: "upload",
        type: "menu-item",
        title: "Uploads",
        subtitle: "",
        icon: <UploadIcon size={16} />,
        count: 0,
      },
      {
        id: "user",
        type: "menu-item",
        title: "Users",
        subtitle: "",
        icon: <UsersIcon size={16} />,
        count: 0,
      },
      {
        id: "plugin",
        type: "menu-item",
        title: "Plugins",
        subtitle: "",
        icon: <PlugIcon size={16} />,
        count: 0,
      },
    ];
  }, [config.accentColor]);

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
      }}
    >
      {items.map((item, index) => {
        if (item.type == "section") {
          return (
            <div
              css={{
                paddingInline: 5,
                opacity: 0.3,
                marginTop: index > 0 ? 10 : 0,
                marginBottom: 5,
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </div>
          );
        }
        return (
          <SlideMenuItem
            key={index}
            href={`/admin/${item.id}`}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            hasArrow
            selected={names[2] == item.id}
            badge={item.count}
            onClick={() => {
              window.history.pushState({}, null, `/admin/${item.id}`);
              props.onItemClick?.();
            }}
          />
        );
      })}
    </div>
  );
};

type SidebarViewProps = {
  floated?: boolean;
  onItemClick?: () => void;
};

const SidebarView: React.FC<SidebarViewProps> = (props) => {
  const theme = useTheme() as Theme;
  const [profilePanelVisible, setProfilePanelVisible] = React.useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setProfilePanelVisible(false);
  });

  const profileItems = React.useMemo(() => {
    return [
      {
        icon: <PencilIcon size={14} />,
        title: "Edit Profile",
        css: { color: "inherit" },
        onClick: () => {},
      },
      {
        icon: <SettingsIcon size={14} />,
        title: "Settings",
        css: { color: "inherit" },
        onClick: () => {},
      },
      {
        icon: <ShieldIcon size={14} />,
        title: "Privacy Policy",
        css: { color: "inherit" },
        onClick: () => {},
      },
      {
        icon: <InboxIcon size={14} />,
        title: "Inbox",
        css: { color: "inherit" },
        onClick: () => {},
      },
      {
        icon: <LogOutIcon size={14} />,
        title: "Logout",
        css: { color: "#f44336" },
        onClick: () => {
          alert("logged out");
        },
      },
    ];
  }, []);

  return (
    <div
      css={{
        padding: props.floated ? 0 : 10,
        height: props.floated ? "calc(100dvh - 20px)" : "auto",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <div>
        <div
          css={{
            padding: 0,
          }}
        >
          <div
            ref={ref}
            onClick={() => {
              setProfilePanelVisible(!profilePanelVisible);
            }}
            css={{
              position: "relative",
              borderRadius: 10,
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              gap: 5,
              alignItems: "center",
              boxShadow: `inset 0 0 0 1px ${Color(theme.colors.foreground)
                .alpha(0.1)
                .toString()}`,
              backgroundColor: Color(theme.colors.accent)
                .alpha(profilePanelVisible ? 0.05 : 0.01)
                .toString(),
              "&:hover": {
                backgroundColor: Color(theme.colors.accent)
                  .alpha(0.05)
                  .toString(),
              },
            }}
          >
            <img
              src={Avatar}
              css={{
                width: 30,
                height: 30,
                borderRadius: 100,
                background: Color(theme.colors.foreground)
                  .alpha(0.15)
                  .toString(),
              }}
            />
            <div css={{ flex: 1 }}>
              <div css={{ fontSize: 12, fontWeight: "bold" }}>Bahman World</div>
              <div css={{ fontSize: 9, opacity: 0.5, marginTop: -5 }}>
                bahman.world@gmail.com
              </div>
            </div>
            <ChevronsUpDownIcon size={18} opacity={0.5} />
            <AnimatePresence>
              {profilePanelVisible && (
                <motion.div
                  initial={{
                    translateY: -10,
                    filter: "blur(5px)",
                    opacity: 0,
                  }}
                  animate={{
                    translateY: 0,
                    filter: "blur(0px)",
                    opacity: 1,
                  }}
                  exit={{ translateY: 10, filter: "blur(5px)", opacity: 0 }}
                  css={{
                    position: "absolute",
                    transformOrigin: "top",
                    top: "calc(100% + 5px)",
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    css={{
                      padding: 5,
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      borderRadius: 10,
                      boxShadow: `inset 0 0 0 1px ${Color(
                        theme.colors.foreground
                      )
                        .alpha(0.1)
                        .toString()}`,
                      backgroundColor: theme.colors.background,
                    }}
                  >
                    {profileItems.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            item.onClick?.();
                            setProfilePanelVisible(false);
                          }}
                          css={[
                            {
                              padding: 10,
                              cursor: "pointer",
                              borderRadius: 6,
                              "&:hover": {
                                backgroundColor: Color(theme.colors.foreground)
                                  .alpha(0.04)
                                  .toString(),
                              },
                            },
                            item.css,
                          ]}
                        >
                          <div
                            css={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 10,
                            }}
                          >
                            {item.icon}
                            {item.title}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div
        css={{
          flex: 1,
          width: 230,
          // height: "100%",
          borderRadius: 10,
          boxShadow: `inset 0 0 0 1px ${Color(theme.colors.foreground)
            .alpha(0.1)
            .toString()}`,
          overflow: "auto",
          // backgroundImage: `linear-gradient(${Color(theme.colors.accent)
          //   .alpha(0.05)
          //   .toString()} , transparent)`,
          backgroundColor: Color(theme.colors.accent).alpha(0.01).toString(),
        }}
      >
        <Scrollbars
          height={"100%"}
          width={"100%"}
          autoHide
          autoHideTimeout={50}
          style={{overflow: 'hidden'}}
          renderThumbVertical={() => {
            return (
              <div
                css={{
                  width: 6,
                  borderRadius: 100,
                  backgroundColor: Color(theme.colors.foreground)
                    .alpha(0.1)
                    .toString(),
                }}
              ></div>
            );
          }}
        >
          <div css={{ padding: 0 }}>
            <SidebarMenu onItemClick={props.onItemClick} />
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default SidebarView;
