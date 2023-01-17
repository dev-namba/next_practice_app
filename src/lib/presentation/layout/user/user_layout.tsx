import { useRecoilState } from "recoil";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { userListState } from "lib/model/atoms/user_atom";
import { User } from "lib/model/types/user";
import UserItem from "lib/presentation/components/items/user_item";
import Padding from "lib/presentation/components/common/padding";

const UserListLayout = () => {
  const [userList, setUserList] = useRecoilState(userListState);

  return (
    <Box w="100%" overflow={"auto"} h="100vh" padding="12px">
      <SimpleGrid columns={3} alignItems="center" spacing="12px">
        {userList.map((value: User) => {
          return <UserItem user={value} key={value.id} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default UserListLayout;
