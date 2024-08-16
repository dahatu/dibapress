import {
  Box,
  Button,
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
  theme,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
// @ts-ignore
import Avatar from "../../assets/avatar.png";
import {
  ChevronDownIcon,
  Edit2Icon,
  Edit3Icon,
  EditIcon,
  Grid3x3Icon,
  GripVertical,
  HandPlatterIcon,
  LogOutIcon,
  Settings2Icon,
  SettingsIcon,
  UserCircle2Icon,
  UserRoundPenIcon,
} from "lucide-react";

const AvatarSrc =
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=200&ext=jpg&ga=GA1.1.2008272138.1723680000&semt=ais_hybrid";

const ProfileMenuView = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<Image src={AvatarSrc} alt={""} w={5} h={5} rounded={"md"} />}
        variant={"ghost"}
        w={"100%"}
        size={"sm"}
        mb={4}
      >
        <HStack gap={2}>
          <Text fontWeight={"bold"}>Bahman</Text>
          <ChevronDownIcon size={14} opacity={0.5} />
          <Spacer />
          <IconButton
            aria-label="edit"
            size={"sm"}
            variant={"ghost"}
            icon={<UserRoundPenIcon size={16} />}
            _hover={{
              bg: "red",
            }}
          />
        </HStack>
      </MenuButton>
      <MenuList autoFocus={false} w={250} mt={-1.5} p={0}>
        <MenuGroup>
          <Box p={3}>
            <VStack alignItems={"start"}>
              <HStack>
                <Image src={AvatarSrc} w={10} h={10} rounded={"md"} />
                <VStack gap={0} alignItems={"start"}>
                  <Text fontWeight={"bold"}>Bahman World</Text>
                  <Text fontSize={10} opacity={0.7}>
                    bahman.world@gmail.com
                  </Text>
                </VStack>
              </HStack>
              <HStack gap={1} mt={2}>
                <Button
                  size={"xs"}
                  variant={"outline"}
                  leftIcon={<UserCircle2Icon size={14} />}
                >
                  Edit Profile
                </Button>
                <Button
                  size={"xs"}
                  variant={"outline"}
                  leftIcon={<SettingsIcon size={14} />}
                >
                  Settings
                </Button>
              </HStack>
            </VStack>
          </Box>
        </MenuGroup>
        <MenuDivider m={0} borderColor={useColorModeValue("#0002", "#fff2")} />
        <MenuGroup>
          <Box p={2} bg={useColorModeValue("#00000008", "#00000033")}>
            <Text fontSize={10} mb={3} lineHeight={1.2} opacity={0.6}>
              You can switch between apps here easily. Click on every app to go
              to its workspace.
            </Text>
            <Button
              w={"100%"}
              size={"sm"}
              justifyContent={"start"}
              variant={"ghost"}
              leftIcon={<GripVertical size={14} style={{ cursor: "grab" }} />}
            >
              Kurdify
            </Button>
            <Button
              w={"100%"}
              size={"sm"}
              justifyContent={"start"}
              variant={"ghost"}
              leftIcon={<GripVertical size={14} style={{ cursor: "grab" }} />}
            >
              Pewist
            </Button>
          </Box>
        </MenuGroup>
        <MenuDivider m={0} borderColor={useColorModeValue("#0002", "#fff2")} />
        <MenuGroup>
          <Box p={1}>
            <MenuItem autoFocus={false}>Settings</MenuItem>
            <MenuItem autoFocus={false}>View Profile</MenuItem>
            <MenuDivider />
            <MenuItem
              autoFocus={false}
              icon={<LogOutIcon size={16} color={theme.colors.red[500]} />}
            >
              <Text color={"red.500"}>Sign out</Text>
            </MenuItem>
          </Box>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenuView;
