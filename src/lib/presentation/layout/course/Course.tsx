import { useRecoilState } from "recoil";
import { courseListState } from "lib/model/atoms/course_atom";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import SocialProfileSimple from "lib/presentation/components/items/todo_item";
import { User } from "lib/model/types/todo";
import CourseItem from "lib/presentation/components/items/todo_item";
import { Course } from "lib/model/types/course";

const CourseList = () => {
  const [courseList, setCourseList] = useRecoilState(courseListState);
  // 完了したTodoを削除
  const deleteTodo = (id: string) => {
    const target = courseList.filter((todo) => {
      return todo.id != id;
    });
    setCourseList(target);
  };

  const addCourse = () => {
    setCourseList([
      {
        id: "naa",
        title: "復刻版-超お得",
        detail: "naa",
        isComplete: true,
        price: 0,
      },
      {
        id: "naa",
        title: "復刻版-超お得",
        detail: "naa",
        isComplete: true,
        price: 0,
      },
      {
        id: "naa",
        title: "復刻版-超お得",
        detail: "naa",
        isComplete: true,
        price: 0,
      },
    ]);
  };

  return courseList.length !== 0 ? (
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      {courseList.map((item: Course) => (
        <CourseItem
          key={item.id}
          course={item}
          onTap={() => deleteTodo(item.id)}
        />
      ))}
    </SimpleGrid>
  ) : (
    <Button
      mt={10}
      // w={"70.vw"}
      bg={"green.400"}
      color={"white"}
      rounded={"xl"}
      boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
      _hover={{
        bg: "green.500",
      }}
      _focus={{
        bg: "green.500",
      }}
      onClick={addCourse}
    >
      復刻版を無料でゲット
    </Button>
  );
};

export default CourseList;
