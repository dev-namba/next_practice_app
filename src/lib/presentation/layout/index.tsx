import { Box, GridItem, Grid } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Padding from "../components/common/padding";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"60px 1fr 30px"}
      gridTemplateColumns={"200px 1fr"}
      h="calc(100vh)"
      color="blackAlpha.700"
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
  // return (
  //   <Box
  //     minWidth="full"
  //     maxWidth="full"
  //     transition="0.5s ease-out"
  //     overflow="hidden"
  //   >
  //     <Padding>
  //       <Header />
  //       <Box as="main" marginY={22} maxWidth="full">
  //         {children}
  //       </Box>
  //       <Footer />
  //     </Padding>
  //   </Box>
  // );
};

export default Layout;
