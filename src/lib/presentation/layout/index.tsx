import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minWidth="full" maxWidth="full" transition="0.5s ease-out">
      <Box>
        <Header />
        <Box as="main" marginY={22} maxWidth="full">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
