import { Box, Flex, Heading } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

import appTitle from "pages/api/new_world";

const Header = () => {
  const [title] = useState(appTitle("encer"));

  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="lg">
        {title}
      </Heading>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
