/** @jsx jsx */
import React from "react";
import { jsx, useTheme } from "@emotion/react";
import { Theme } from "components/Dibapress";
import { useConfig } from "stores/useConfig";
import {
  AlbumIcon,
  BookOpenTextIcon,
  ChevronRight,
  DnaIcon,
  DropletIcon,
  FileIcon,
  HomeIcon,
  Layers2Icon,
  MicIcon,
  MusicIcon,
  PlugIcon,
  PodcastIcon,
  Settings2Icon,
  StickyNoteIcon,
  TagIcon,
  UploadIcon,
  UserCircleIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";
import Color from "color";
import { usePathname } from "next/navigation";
import "swiper/css";
import Image from "next/image";
import { Scrollbars } from "react-custom-scrollbars-2";
// @ts-ignore
import Avatar from "../../../assets/avatar.png";

type SlideMenuItemProps = {
  href: any;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  selected?: boolean;
  badge?: any;
};

const SlideMenuItem: React.FC<SlideMenuItemProps> = (props) => {
  const config = useConfig();
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
        backgroundColor: props.selected
          ? Color(theme.colors.accent).alpha(0.1).toString()
          : "transparent",
        "&:hover": {
          backgroundColor: props.selected
            ? undefined
            : Color(theme.colors.foreground).alpha(0.08).toString(),
        },
      }}
    >
      <div
        style={{
          color: props.selected ? theme.colors.accent : theme.colors.foreground,
        }}
      >
        {props.icon}
      </div>
      <div
        css={{
          flex: 1,
          color: props.selected ? theme.colors.accent : theme.colors.foreground,
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
              <div css={{ fontSize: 9, opacity: 0.4, marginTop: -5 }}>
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
        icon: <HomeIcon size={16} />,
        count: 0,
      },
      {
        id: "settings",
        type: "menu-item",
        title: "Settings",
        icon: <Settings2Icon size={16} />,
        count: 0,
      },
      {
        id: "profile",
        type: "menu-item",
        title: "Profile",
        subtitle: "bahman.world@gmail.com",
        icon: <UserCircleIcon size={16} />,
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
        icon: <Layers2Icon size={16} />,
        count: 32,
      },
      {
        id: "page",
        type: "menu-item",
        title: "Pages",
        icon: <StickyNoteIcon size={16} />,
        count: 32,
      },
      {
        id: "music",
        type: "menu-item",
        title: "Musics",
        icon: <MusicIcon size={16} />,
        count: 32,
      },
      {
        id: "video",
        type: "menu-item",
        title: "Videos",
        icon: <VideoIcon size={16} />,
        count: 0,
      },
      {
        id: "album",
        type: "menu-item",
        title: "Albums",
        icon: <AlbumIcon size={16} />,
        count: 11,
      },
      {
        id: "podcast",
        type: "menu-item",
        title: "Podcasts",
        icon: <PodcastIcon size={16} />,
        count: 0,
      },
      {
        id: "artist",
        type: "menu-item",
        title: "Artists",
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
        icon: <DropletIcon size={16} />,
        count: 0,
      },
      {
        id: "tag",
        type: "menu-item",
        title: "Tags",
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
        icon: <UploadIcon size={16} />,
        count: 0,
      },
      {
        id: "user",
        type: "menu-item",
        title: "Users",
        icon: <UsersIcon size={16} />,
        count: 0,
      },
      {
        id: "plugin",
        type: "menu-item",
        title: "Plugins",
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
            rightIcon={
              <ChevronRight
                size={16}
                strokeWidth={names[2] == item.id ? 3 : 2}
                color={
                  names[2] == item.id
                    ? theme.colors.accent
                    : Color(theme.colors.foreground).alpha(0.5).toString()
                }
              />
            }
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

  return (
    <div
      css={{
        padding: props.floated ? 0 : 10,
        height: "100%",
        borderRadius: 10,
      }}
    >
      <div
        css={{
          width: 230,
          height: "100%",
          borderRadius: 10,
          boxShadow: `inset 0 0 0 1px ${Color(theme.colors.foreground)
            .alpha(0.05)
            .toString()}`,
          borderRight: "1px solid #0000",
          overflow: "auto",
          backgroundImage: `linear-gradient(${Color(theme.colors.accent)
            .alpha(0.01)
            .toString()} , transparent)`,
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
          {/* <div
            css={{
              padding: 15,
              paddingBottom: 50,
              marginBottom: -30,
              borderRadius: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
              gap: 5,
              overflow: "hidden",
              background: `linear-gradient(${Color(theme.colors.accent)
                .alpha(0.1)
                .toString()}, transparent)`,
            }}
          >
            <Image
              src={Avatar}
              alt={"avatar"}
              width={30}
              height={30}
              css={{ borderRadius: 100, marginBottom: 10, zIndex: 1 }}
            />
            <div>
              <div css={{ marginBottom: -5, fontWeight: "bold", zIndex: 1 }}>
                Bahman World
              </div>
              <div css={{ opacity: 0.5, zIndex: 1 }}>
                <small>bahman.world@gmail.com</small>
              </div>
              <div css={{ opacity: 0.5, zIndex: 1 }}>
                <a href={"#"}>
                  <small>Edit Profile</small>
                </a>
              </div>
            </div>
          </div> */}
          <SidebarMenu onItemClick={props.onItemClick} />
        </Scrollbars>
      </div>
    </div>
  );
};

export default SidebarView;
