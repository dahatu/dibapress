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
import { useDibapres } from "./useDibapress";
import {
  Box,
  ChevronDownIcon,
  ChevronRightIcon,
  Divide,
  EditIcon,
  EllipsisIcon,
  GridIcon,
  LayoutGridIcon,
  MusicIcon,
  Settings2Icon,
  UserCircleIcon,
  UsersIcon,
} from "lucide-react";
import { theme } from "./theme";
import { Link } from "@chakra-ui/next-js";

const AvatarSrc = "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833584.jpg?size=238&ext=jpg&ga=GA1.1.2008272138.1723852800&semt=ais_hybrid"

const App = () => {
  const dibapress = useDibapres();
  const params = useParams();
  console.table(params);

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
        <Menu placement="bottom-start">
          <MenuButton
            as={Button}
            size={'md'}
            variant={"ghost"}
            w={"100%"}
            p={2}
            justifyContent={"start"}
          >
            <HStack>
              <Image src={AvatarSrc} w={7} h={7} rounded={'100px'}/>
              <VStack gap={0} alignItems={'start'}>
              <Text>Bahman World</Text>
              <Text fontSize={8} opacity={0.5}>bahman.world@gmail.com</Text>
              </VStack>
              <ChevronDownIcon size={16} opacity={0.5} />
            </HStack>
          </MenuButton>
          <MenuList w={230}>
            <MenuGroup>
              <VStack
                alignItems={"start"}
                gap={0}
                bg={useColorModeValue("#00000011", "#ffffff06")}
                p={2}
                m={0}
                rounded={"md"}
                mb={2}
              >
                <Text>Please select your app to start.</Text>
                <Text color={"red"} fontSize={10}>
                  There are no apps here.
                </Text>
              </VStack>
            </MenuGroup>
            <MenuItem icon={<UserCircleIcon size={16} />}>
              Invite Friends
            </MenuItem>
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
          {["Music", "Video", "Album", "Artist"].map((item) => {
            return (
              <Button role="group" w={"100%"} justifyContent={"start"} p={1}>
                <HStack w={"100%"} gap={1}>
                  <Button position={"relative"} size={"xs"}>
                    <HStack
                      position={"absolute"}
                      transition={"all 0.1s ease"}
                      transform={"scale(1)"}
                      _groupHover={{ transform: "scale(0)" }}
                    >
                      <AbsoluteCenter>
                        <MusicIcon size={16} />
                      </AbsoluteCenter>
                    </HStack>
                    <HStack
                      position={"absolute"}
                      transition={"all 0.1s ease"}
                      transform={"scale(0)"}
                      _groupHover={{ transform: "scale(1)" }}
                    >
                      <AbsoluteCenter>
                        <ChevronRightIcon size={14} />
                      </AbsoluteCenter>
                    </HStack>
                  </Button>
                  <Text>{item}</Text>
                  <Spacer />
                  <Button as={Text} p={1} size={"xs"}>
                    <EllipsisIcon size={14} />
                  </Button>
                </HStack>
              </Button>
            );
          })}
        </VStack>
      </VStack>
      <Container maxW={1000} p={5}>
        <VStack alignItems={"start"}>
          <Text>{params.dibapress}</Text>
          <Link href="/admin/about">Go About</Link>
          <Link href="/admin">Go Home</Link>
          <Button variant={"solid"} colorScheme={"orange"}>
            Please click here for more information
          </Button>
          <Text>{params.dibapress}</Text>
        </VStack>
      </Container>
    </HStack>
  );
};

export default App;
