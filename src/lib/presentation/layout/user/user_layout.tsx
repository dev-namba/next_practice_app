import { useRecoilState } from "recoil";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { userListState } from "lib/model/atoms/user_atom";
import { User } from "lib/model/types/user";
import UserItem from "lib/presentation/components/items/user_item";
import Padding from "lib/presentation/components/common/padding";

const UserListLayout = () => {
  const [userList, setUserList] = useRecoilState(userListState);

  return (
    <Box w="100%" overflow={"auto"} h="100vh">
      <SimpleGrid columns={3} alignItems="center">
        {userList.map((item: User) => (
          <UserItem user={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UserListLayout;
