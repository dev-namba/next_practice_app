import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Portal,
  PopoverFooter,
  usePopoverContext,
} from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import Padding from "../components/common/padding";
import AlertDialogExample, {
  BasicUsage,
} from "../components/popup/ShowOkAlertDialog";
import { useState } from "react";

const Header = () => {
  const [state, setstate] = useState(false);
  return (
    <Flex as="header" width="full" align="center" height="100%">
      <Padding>
        <Heading
          as="h1"
          size="lg"
          color={useColorModeValue("gray.800", "white")}
        >
          Next
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
