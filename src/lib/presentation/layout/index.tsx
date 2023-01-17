import { Box, GridItem, Grid, theme } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Padding from "../components/common/padding";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
      gridTemplateRows={"60px 1fr 30px"}
      gridTemplateColumns={"200px 1fr"}
      h="calc(100vh)"
      color="blackAlpha.700"
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"nav"}>
        <Sidebar />
      </GridItem>
      <GridItem area={"main"} overflow="auto">
        {children}
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
