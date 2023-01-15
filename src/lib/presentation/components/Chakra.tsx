import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "lib/presentation/styles/theme";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
