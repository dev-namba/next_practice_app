import { Button } from "@chakra-ui/react";
import { FC } from "react";

type CourseButtonProps = {
  onTap?: VoidFunction;
};

const CourseButton: FC<CourseButtonProps> = (props) => (
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
    onClick={props.onTap}
  >
    復刻版を無料でゲット
  </Button>
);

export default CourseButton;
