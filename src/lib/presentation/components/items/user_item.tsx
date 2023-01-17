import { FC } from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Heading,
  HStack,
  theme,
  Stack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "lib/model/types/user";
import TagWidget from "../tag/tag_widget";
import Padding from "../common/padding";

type UserProps = {
  user: User;
};

const UserItem: FC<UserProps> = (props) => {
  return (
    <Box
      minWidth="250px"
      bg={useColorModeValue(theme.colors.gray[100], "gray.900")}
      borderRadius="12px"
    >
      <Padding p={{ p: "12px" }}>
        <Flex direction="column" justify="center" align="center">
          <Padding>
            <Avatar />
          </Padding>
          <Heading>{props.user.name}</Heading>
          <Text>{props.user.id}</Text>
          <Padding>
            <Text>{props.user.profile}</Text>
          </Padding>
          <Box w="100%">
            <Wrap spacingY="12px" align="center">
              {props.user.tags.map((value, index) => (
                <TagWidget
                  tag={value}
                  onTap={() => {
                    console.log(index);
                  }}
                />
              ))}
            </Wrap>
          </Box>

          <Box h="12px" />
        </Flex>
      </Padding>
    </Box>
  );
};

export default UserItem;
