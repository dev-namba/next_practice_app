import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import UserListLayout from "lib/presentation/layout/user/user_layout";

const UsersPage = () => {
  // return (
  //   <Grid
  //     templateAreas={`"header header"
  //                 "nav main"
  //                 "nav footer"`}
  //     gridTemplateRows={"50px 1fr 30px"}
  //     gridTemplateColumns={"150px 1fr"}
  //     h="calc(78vh)"
  //     gap="1"
  //     color="blackAlpha.700"
  //     fontWeight="bold"
  //   >
  //     <GridItem pl="2" bg="orange.300" area={"header"}>
  //       Header
  //     </GridItem>
  //     <GridItem pl="2" bg="pink.300" area={"nav"}>
  //       Nav
  //     </GridItem>
  //     <GridItem pl="2" bg="green.300" area={"main"}>
  //       Main
  //     </GridItem>
  //     <GridItem pl="2" bg="blue.300" area={"footer"}>
  //       Footer
  //     </GridItem>
  //   </Grid>
  // );
  // return (
  //   <Box>
  //     <Flex
  //       direction="column"
  //       alignItems="center"
  //       justifyContent="center"
  //       minHeight="70vh"
  //       gap={4}
  //       mb={8}
  //       w="full"
  //     >
  //       <NextSeo title="Home" />
  //       <UserListLayout />
  //     </Flex>
  //   </Box>
  // );
};

export default UsersPage;
