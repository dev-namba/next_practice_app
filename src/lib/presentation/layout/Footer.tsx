import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      height="100%"
      align="center"
    >
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link href="https://next.jp" isExternal rel="noopener noreferrer">
          next.jp
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
