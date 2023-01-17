import { Flex, theme, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import UserListLayout from "lib/presentation/layout/user/user_layout";

const UsersPage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      w="full"
      bg={useColorModeValue("gray.300", "gray.600")}
    >
      <NextSeo title="User" />
      <UserListLayout />
    </Flex>
  );
};

export default UsersPage;
