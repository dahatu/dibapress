import {
  AbsoluteCenter,
  Button,
  Container,
  Divider,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useDibapres } from "./store/useDibapress";
import {
  AlbumIcon,
  Box,
  ChevronDownIcon,
  ChevronRightIcon,
  Divide,
  EarthIcon,
  EditIcon,
  EllipsisIcon,
  GridIcon,
  LayoutGridIcon,
  LibraryIcon,
  MicIcon,
  MusicIcon,
  Settings2Icon,
  UserCircleIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";
import { theme } from "./theme";
import { Link } from "@chakra-ui/next-js";
import React from "react";

import Avatar from './assets/avatar.png'

const AvatarSrc =
  "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034021.jpg";

const App = () => {
  const dibapress = useDibapres();
  const params = useParams<{dibapress: []}>();
  console.table(params);


  const [items, setItems] = React.useState([
    {
      id: 1,
      name: "Music",
      icon: <MusicIcon size={16} />,
    },
    {
      id: 2,
      name: "Video",
      icon: <VideoIcon size={16} />,
    },
    {
      id: 3,
      name: "Album",
      icon: <LibraryIcon size={16} />,
    },
    {
      id: 4,
      name: "Artist",
      icon: <MicIcon size={16} />,
    },
  ]);

  return (
    <HStack
      p={0}
      m={0}
      h={"100dvh"}
      alignItems={"start"}
      bg={useColorModeValue("white", "black")}
    >
      <VStack
        bg={useColorModeValue("gray.50", "gray.900")}
        boxShadow={`inset -1px 0 1px ${useColorModeValue(
          "#00000009",
          "#ffffff05"
        )}`}
        minW={220}
        p={2}
        h={"100dvh"}
      >
        <Menu placement="top-start">
          <MenuButton
            as={Button}
            size={"md"}
            variant={"ghost"}
            w={"100%"}
            h={"auto"}
            px={2}
            py={2}
            justifyContent={"start"}
          >
            <HStack>
              <Image src={AvatarSrc} w={5} h={5} rounded={"100px"} />
              <Text>Bahman</Text>
              <ChevronDownIcon size={16} opacity={0.5} />
              <Spacer />
              <Settings2Icon size={16} />
            </HStack>
          </MenuButton>
          <MenuList w={230}>
            <MenuGroup>
              <VStack
                alignItems={"start"}
                gap={0}
                bg={useColorModeValue("#00000008", "#ffffff06")}
                px={1}
                py={3}
                m={0}
                rounded={"md"}
                mb={2}
              >
                <HStack alignItems={"start"}>
                  <Image src={AvatarSrc} w={12} h={12} rounded={"100px"} />
                  <VStack gap={0} alignItems={"start"}>
                    <Text fontWeight={"bold"}>Bahman World</Text>
                    <Text mt={-1} fontSize={10} opacity={0.5}>
                      bahman.world@gmail.com
                    </Text>
                    <Button mt={1} size={"xs"} variant={"outline"}>
                      Edit Profile
                    </Button>
                  </VStack>
                </HStack>
              </VStack>
            </MenuGroup>
            <MenuItem icon={<UserCircleIcon size={16} />}>
              Invite Friends
            </MenuItem>
            <MenuItem icon={<EarthIcon size={16} />}>Visit Site</MenuItem>
            <MenuItem icon={<UsersIcon size={16} />}>Edit Profile</MenuItem>
            <MenuItem icon={<Settings2Icon size={16} />}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem
              icon={<EditIcon size={16} color={theme.colors.red[500]} />}
            >
              <Text color={"red.500"}>Sign Out</Text>
            </MenuItem>
          </MenuList>
        </Menu>

        <Divider variant={"ghost"} />

        <VStack w={"100%"} gap={1} alignItems={"start"}>
          <HStack fontWeight={"bold"} px={2.5} py={1} opacity={0.5}>
            <LayoutGridIcon size={12} />
            <Text fontSize={"xs"}>Collections</Text>
          </HStack>
          {items.map((item) => {
            return (
              <Button role="group" w={"100%"} justifyContent={"start"} p={1}>
                <HStack w={"100%"} gap={1}>
                  <Button position={"relative"} size={"xs"}>
                    <HStack
                      position={"absolute"}
                      transition={"all 0.2s ease"}
                      transform={"scale(1)"}
                      _groupHover={{ transform: "scale(0)" }}
                    >
                      <AbsoluteCenter>{item.icon}</AbsoluteCenter>
                    </HStack>
                    <HStack
                      position={"absolute"}
                      transition={"all 0.2s ease"}
                      transform={"scale(0)"}
                      _groupHover={{ transform: "scale(1)" }}
                    >
                      <AbsoluteCenter>
                        <ChevronRightIcon size={16} />
                      </AbsoluteCenter>
                    </HStack>
                  </Button>
                  <Text>{item.name}</Text>
                  <Spacer />
                  <Button as={Text} p={1} size={"xs"}>
                    <EllipsisIcon size={14} />
                  </Button>
                </HStack>
              </Button>
            );
          })}
        </VStack>
        <Spacer />
        <Text
          alignSelf={"start"}
          fontSize={8}
          opacity={0.3}
          userSelect={"none"}
          m={2}
        >
          Dibapress CMS v1.0.2
        </Text>
      </VStack>
      <Container maxW={1000} p={5}>
        <VStack alignItems={"start"}>
          <HStack>
            <Button as={Link} colorScheme="'orange" href={"/admin"} variant={"unstyled"}>
              Home
            </Button>
            <Button as={Link} href={"/admin/about"} variant={"outline"}>
              About
            </Button>
            <Button as={Link} href={"/admin/profile/edit"} variant={"outline"}>
              Profile
            </Button>
            <Button variant={"solid"} colorScheme={"orange"}>
              Dark / Light
            </Button>
          </HStack>
          <Text>{params.dibapress?.join?.(' -> ')}</Text>
        </VStack>
      </Container>
    </HStack>
  );
};

export default App;
