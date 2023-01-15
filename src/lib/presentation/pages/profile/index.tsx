import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import SomeText from "lib/presentation/components/samples/SomeText";
import TodoList from "lib/presentation/layout/todo/Todo";

const Profile = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Profile" />
      <TodoList />
    </Flex>
  );
};

export default Profile;
