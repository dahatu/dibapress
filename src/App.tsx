import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useDibapres } from "./store/useDibapress";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  EarthIcon,
  EditIcon,
  EllipsisIcon,
  HomeIcon,
  LayoutGridIcon,
  LibraryIcon,
  MicIcon,
  MusicIcon,
  PlusIcon,
  Settings2Icon,
  UserCircleIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";
import { theme } from "./theme";
import React from "react";

const AvatarSrc =
  "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=ais_user";

const App = () => {
  const dibapress = useDibapres();
  const router = useRouter();
  const [selected, setSelected] = React.useState(0);

  const [items, setItems] = React.useState([
    {
      id: 1,
      name: "Music",
      icon: <MusicIcon />,
    },
    {
      id: 2,
      name: "Video",
      icon: <VideoIcon />,
    },
    {
      id: 3,
      name: "Album",
      icon: <LibraryIcon />,
    },
    {
      id: 4,
      name: "Artist",
      icon: <MicIcon />,
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
        minW={210}
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
          <MenuList w={240}>
            <MenuGroup>
              <VStack
                alignItems={"start"}
                gap={0}
                bg={useColorModeValue("#00000011", "#ffffff11")}
                rounded={6}
                px={1}
                py={3}
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
            <MenuGroup>
              <MenuItem icon={<UserCircleIcon size={16} />}>
                Invite Friends
              </MenuItem>
              <MenuItem icon={<EarthIcon size={16} />}>Visit Site</MenuItem>
              <MenuItem icon={<UsersIcon size={16} />}>Edit Profile</MenuItem>
              <MenuItem icon={<Settings2Icon size={16} />}>Settings</MenuItem>
              {/* <MenuDivider /> */}
              <MenuItem
                icon={<EditIcon size={16} color={theme.colors.red[500]} />}
              >
                <Text color={"red.500"}>Sign Out</Text>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <Divider variant={"ghost"} />

        <VStack w={"100%"} gap={1} alignItems={"start"}>
          <HStack fontWeight={"bold"} px={2.5} py={1} opacity={0.5}>
            <LayoutGridIcon size={12} />
            <Text fontSize={"xs"}>Collections</Text>
          </HStack>
          {items.map((item, index) => {
            return (
              <HStack
                role="group"
                onClick={() => setSelected(index)}
                transition={"all 0.2s ease"}
                cursor={"pointer"}
                bg={
                  selected == index
                    ? useColorModeValue("gray.100", "gray.800")
                    : "transparent"
                }
                _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
                rounded={"md"}
                w={"100%"}
                gap={2}
                px={1}
                py={1}
              >
                <Button
                  size="xs"
                  position={"relative"}
                  variant={'unstyled'}
                  _hover={{ bg: useColorModeValue("gray.300", "gray.700") }}
                >
                  <Center>
                    <Icon
                      fontSize={16}
                      position={"absolute"}
                      transition={"all 0.1s ease"}
                      transform={"scale(1)"}
                      _groupHover={{
                        transform: "scale(0)",
                      }}
                    >
                      {item.icon}
                    </Icon>
                  </Center>
                  <Center>
                    <Icon
                      fontSize={16}
                      position={"absolute"}
                      transition={"all 0.1s ease"}
                      transform={"scale(0)"}
                      _groupHover={{
                        transform: "scale(1)",
                      }}
                    >
                      <ChevronRightIcon />
                    </Icon>
                  </Center>
                </Button>
                <Button variant={"unstyled"} size={"xs"}>
                  <Text>{item.name}</Text>
                </Button>
                <Spacer />
                <HStack gap={0}>
                  <Button
                    size={"xs"}
                    _hover={{ bg: useColorModeValue("gray.300", "gray.700") }}
                  >
                    <Icon fontSize={14}>
                      <EllipsisIcon />
                    </Icon>
                  </Button>
                  {/* <Button
                    size={"xs"}
                    _hover={{ bg: useColorModeValue("gray.300", "gray.700") }}
                  >
                    <Icon fontSize={14}>
                      <PlusIcon />
                    </Icon>
                  </Button> */}
                </HStack>
              </HStack>
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
      <Container maxW={1000} p={5} overflow={"clip"}>
        <VStack alignItems={"start"} overflow={"clip"} flexWrap={"wrap"}>
          <HStack>
            <Button
              onClick={() => {
                router.push("/admin");
              }}
              variant={"outline"}
            >
              <HStack>
                <VStack>
                  <HomeIcon size={14} />
                </VStack>
                <Text>Home Page</Text>
              </HStack>
            </Button>
            <Button
              onClick={() => router.push("/admin/about")}
              variant={"outline"}
            >
              About
            </Button>
            <Button
              onClick={() => router.push("/admin/profile/edit")}
              variant={"outline"}
            >
              Profile
            </Button>
            <Button variant={"outline"} colorScheme={"orange"}>
              Dark / Light
            </Button>
          </HStack>
        </VStack>
      </Container>
    </HStack>
  );
};

export default App;
