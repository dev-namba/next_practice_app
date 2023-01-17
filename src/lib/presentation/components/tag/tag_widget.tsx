import { FC } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Tag, TagLeftIcon, TagLabel, Center } from "@chakra-ui/react";

type TagProps = {
  tag: string;
  onTap?: VoidFunction;
};

const TagWidget: FC<TagProps> = (props) => {
  return (
    <Tag
      maxWidth="100px"
      minWidth="60px"
      variant="subtle"
      colorScheme="cyan"
      onClick={() => props.onTap}
    >
      <Center>
        <TagLabel>{props.tag}</TagLabel>
      </Center>
    </Tag>
  );
};

export default TagWidget;
