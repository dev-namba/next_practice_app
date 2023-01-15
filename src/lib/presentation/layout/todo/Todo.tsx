import { useRecoilState } from "recoil";
import { todoListState } from "lib/model/atoms/todo_atom";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SocialProfileSimple from "lib/presentation/components/items/todo_item";
import { User } from "lib/model/types/todo";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  // 完了したTodoを削除
  const deleteTodo = (id: string) => {
    const target = todoList.filter((todo) => {
      return todo.id != id;
    });
    setTodoList(target);
  };

  return (
    <SimpleGrid columns={3} spacing={10}>
      {todoList.map((item: User) => (
        <SocialProfileSimple key={item.id} user={item} />
      ))}
    </SimpleGrid>
  );
};

export default TodoList;
