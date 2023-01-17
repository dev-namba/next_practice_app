import { FC } from "react";

import {
  Flex,
  Icon,
  Text,
  Box,
  Center,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";
import { SideMenu } from "lib/model/types/side_menu";

type SidebarItemProps = {
  onTap: VoidFunction;
  sideMenu: SideMenu;
};
const SideBarItem: FC<SidebarItemProps> = (props) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      role="group"
      cursor="pointer"
      w="100%"
      _hover={{
        bg: theme.colors.gray[400],
        color: "white",
      }}
      height="50px"
      borderRadius="12px"
    >
      <Box w="20px" />
      <Center w="50px" h="50px">
        <Icon
          as={props.sideMenu.icon}
          fontSize="20px"
          color={useColorModeValue("gray.800", "white")}
        />
      </Center>
      <Center w="100%" h="50px">
        <Text
          fontWeight="bold"
          fontSize="16px"
          color={useColorModeValue("gray.800", "white")}
        >
          {props.sideMenu.title}
        </Text>
      </Center>
      <Box w="20px" />
    </Flex>
  );
};

export default SideBarItem;
