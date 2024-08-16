import React from "react";
import {
  Box,
  HStack,
  Container,
  useColorMode,
  useColorModeValue,
  VStack,
  Divider,
  Button,
  Spacer,
  Heading,
  Text,
  ButtonGroup,
  IconButton,
  Stack,
  AbsoluteCenter,
  Collapse,
  useDisclosure,
  SlideFade,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import ProfileMenuView from "./ProfileMenuView";
import {
  Album,
  AlbumIcon,
  ChevronRightIcon,
  EllipsisIcon,
  GalleryVerticalEndIcon,
  MicIcon,
  MoreHorizontalIcon,
  MusicIcon,
  PlusIcon,
  ShapesIcon,
  VideoIcon,
} from "lucide-react";
import AnimateHeight from "react-animate-height";

type TCollection = {
  id: any;
  title: string;
  icon: React.ReactNode | React.ReactElement | any;
};

const Wrapper = () => {
  const colorMode = useColorMode();
  const [selected, setSelected] = React.useState("music");
  const { isOpen, onToggle } = useDisclosure();

  const [collections, setCollections] = React.useState<TCollection[]>([
    {
      id: "music",
      title: "Musics",
      icon: <MusicIcon size={16} />,
    },
    {
      id: "album",
      title: "Albums",
      icon: <GalleryVerticalEndIcon size={16} />,
    },
    {
      id: "artist",
      title: "Artists",
      icon: <MicIcon size={16} />,
    },
    {
      id: "video",
      title: "Videos",
      icon: <VideoIcon size={16} />,
    },
    {
      id: "genre",
      title: "Genres",
      icon: <ShapesIcon size={16} />,
    },
  ]);

  return (
    <HStack alignItems={"start"} gap={0}>
      <VStack
        bg={useColorModeValue("#00000005", "#ffffff05")}
        h={"100dvh"}
        width={230}
        p={2}
        gap={1}
        boxShadow={`inset -1px 0 0 ${useColorModeValue(
          "#00000009",
          "#ffffff09"
        )}`}
        alignItems={"start"}
      >
        <ProfileMenuView />
        <Text px={1} opacity={0.5} fontSize={11} fontWeight={"bold"}>
          Collections
        </Text>
        <VStack w={"100%"} gap={1} alignItems={"stretch"}>
          {collections.map((collection, index) => {
            return (
              <CollectionItemButton
                collection={collection}
                selected={collection.id == selected}
                onClick={() => {
                  setSelected(collection.id);
                }}
              />
            );
          })}
        </VStack>
      </VStack>
      <Box flex={1} h={"100dvh"}>
        <Container maxW={"900px"}></Container>
      </Box>
    </HStack>
  );
};

const CollectionItemButton = ({
  collection,
  selected,
  onClick,
}: {
  collection: TCollection;
  selected: boolean;
  onClick: () => void;
}) => {
  const [height, setHeight] = React.useState(0);

  return (
    <Stack width={"100%"} gap={0}>
      <Button
        key={collection.id}
        justifyContent={"start"}
        variant={"ghost"}
        role="group"
        bg={selected ? useColorModeValue("gray.100", "gray.700") : "inherit"}
        onClick={onClick}
      >
        <HStack w={"100%"}>
          <Stack role="collapse" position={"relative"} ms={2} me={3}>
            {!height && (
              <AbsoluteCenter>
                <Box
                  transition={"all 0.1s ease"}
                  transform={"scale(1)"}
                  sx={{
                    '[role="collapse"]:hover &': {
                      transform: "scale(0)",
                    },
                  }}
                >
                  {collection.icon}
                </Box>
              </AbsoluteCenter>
            )}
            <AbsoluteCenter>
              <Box
                transition={"all 0.1s ease"}
                transform={`scale(${height == -1 ? 1 : 0})`}
                sx={{
                  "[role='collapse']:hover &": {
                     transform: "scale(1)"
                  },
                }}
              >
                <IconButton
                  onClick={() => setHeight(height == -1 ? 0 : -1)}
                  aria-label=""
                  rounded={4}
                  size={"xs"}
                  variant={"ghost"}
                  icon={
                    <ChevronRightIcon
                      size={14}
                      absoluteStrokeWidth
                      style={{
                        transition: "all 0.2s ease",
                        transform: `rotateZ(${height == -1 ? 90 : 0}deg)`,
                      }}
                    />
                  }
                />
              </Box>
            </AbsoluteCenter>
          </Stack>
          <Text>{collection.title}</Text>
          <Spacer />
          <IconButton
            aria-label=""
            size={"xs"}
            variant={"ghost"}
            rounded={4}
            icon={<EllipsisIcon size={16} absoluteStrokeWidth />}
            visibility={"hidden"}
            _groupHover={{
              visibility: "visible",
            }}
          />
          <IconButton
            aria-label=""
            size={"xs"}
            variant={"ghost"}
            rounded={4}
            icon={<PlusIcon size={16} absoluteStrokeWidth />}
            visibility={"hidden"}
            _groupHover={{
              visibility: "visible",
            }}
          />
        </HStack>
      </Button>
      <AnimateHeight height={height == -1 ? "auto" : 0} duration={150}>
        <Box opacity={0.3} rounded={"md"} p={2}>
          No {collection.id}s here.
        </Box>
      </AnimateHeight>
    </Stack>
  );
};

export default Wrapper;
