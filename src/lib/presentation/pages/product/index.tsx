import { Flex, Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ProductList from "lib/presentation/layout/product/product_layout";

const ProductPage = () => {
  return (
    <Box>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
        gap={4}
        mb={8}
        w="full"
      >
        <NextSeo title="Home" />
        <ProductList />
      </Flex>
    </Box>
  );
};

export default ProductPage;
