/** @jsx jsx */

import React from "react";
import { jsx, useTheme } from "@emotion/react";
import { Theme } from "components/Dibapress";
import { useConfig } from "stores/useConfig";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import {
  AlbumIcon,
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  ImageIcon,
  Music2,
  MusicIcon,
  SettingsIcon,
  ShapesIcon,
  UserIcon,
  VideoIcon,
} from "lucide-react";
import Color from "color";
import "swiper/css";

type SlideMenuItemProps = {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  title: string;
  onClick?: () => void;
  selected?: boolean;
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
        cursor: "pointer",
        gap: 10,
        paddingInline: 10,
        paddingBlock: 8,
        borderRadius: 5,
        opacity: props.selected ? 1 : 0.6,
        backgroundColor: props.selected
          ? Color(config.accentColor).alpha(0.1).toString()
          : "transparent",
        "&:hover": {
          backgroundColor: props.selected
            ? undefined
            : Color(theme.colors.foreground).alpha(0.1).toString(),
        },
      }}
    >
      <div
        style={{
          marginTop: -1,
          color: props.selected ? theme.colors.accent : theme.colors.foreground,
          opacity: props.selected ? 1 : 0.6,
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
        {props.title}
      </div>
      {props.rightIcon}
    </div>
  );
};

const Slide1View = () => {
  const swiper = useSwiper();
  const slide = useSwiperSlide();
  const config = useConfig();
  const theme = useTheme() as Theme;
  const [selectedItem, setSelectedItem] = React.useState(0);

  const items = React.useMemo(() => {
    return [
      {
        id: Math.random(),
        type: "section",
        title: "Collections",
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Dashboard",
        icon: <HomeIcon size={16} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Musics",
        icon: <MusicIcon size={16} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Videos",
        icon: <VideoIcon size={16} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Albums",
        icon: <AlbumIcon size={16} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Artists",
        icon: <UserIcon size={16} />,
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Media",
        icon: <ImageIcon size={16} />,
      },
      {
        id: Math.random(),
        type: "section",
        title: "Taxonomies",
      },
      {
        id: Math.random(),
        type: "menu-item",
        title: "Genres",
        icon: <ShapesIcon size={16} />,
      },
    ];
  }, [config.accentColor]);

  return (
    <div
      css={{ display: "flex", flexDirection: "column", gap: 5, padding: 10 }}
    >
      {items.map((item, index) => {
        if (item.type == "section") {
          return (
            <div
              css={{
                paddingInline: 5,
                opacity: 0.3,
                marginTop: index > 0 ? 20 : 0,
                // marginBottom: 5,
                fontSize: 10,
                fontWeight: 'bold',
              }}
            >
              {item.title}
            </div>
          );
        }
        return (
          <SlideMenuItem
            key={index}
            title={item.title}
            icon={item.icon}
            rightIcon={
              <ChevronRight
                size={16}
                strokeWidth={selectedItem == index ? 3 : 2}
                color={
                  selectedItem == index
                    ? theme.colors.accent
                    : Color(theme.colors.foreground).alpha(0.5).toString()
                }
              />
            }
            selected={selectedItem == index}
            onClick={() => {
              setSelectedItem(index);
              swiper.slideNext();
            }}
          />
        );
      })}
    </div>
  );
};

const Slide2View = () => {
  const swiper = useSwiper();

  return (
    <div
      css={{ display: "flex", flexDirection: "column", gap: 10, padding: 10 }}
    >
      <SlideMenuItem
        title="Back"
        icon={<ChevronLeft size={18} />}
        onClick={() => {
          swiper.slidePrev();
        }}
      />
    </div>
  );
};

const LeftSideView = () => {
  return (
    <Swiper slidesPerView={1} css={{ width: "100%" }} allowTouchMove={false}>
      <SwiperSlide>
        <Slide1View />
      </SwiperSlide>
      <SwiperSlide>
        <Slide2View />
      </SwiperSlide>
    </Swiper>
  );
};

export default LeftSideView;
