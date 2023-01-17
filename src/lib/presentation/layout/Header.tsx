import {
  Box,
  Flex,
  Heading,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

import appTitle from "pages/api/new_world";
import Padding from "../components/common/padding";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" height="100%">
      <Padding>
        <Heading
          as="h1"
          size="lg"
          color={useColorModeValue("gray.800", "white")}
        >
          encer
        </Heading>
      </Padding>
      <Box marginLeft="auto">
        <Padding>
          <ThemeToggle />
        </Padding>
      </Box>
    </Flex>
  );
};

export default Header;
