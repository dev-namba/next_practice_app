import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import CourseList from "lib/presentation/layout/course/Course";

const Course = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Course" />
      <CourseList />
    </Flex>
  );
};

export default Course;
