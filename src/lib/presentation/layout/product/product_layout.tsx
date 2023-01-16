import { useRecoilState } from "recoil";
import { SimpleGrid, Button, Box, Center } from "@chakra-ui/react";
import { Course } from "lib/model/types/course";
import { productListState } from "lib/model/atoms/product_atom";
import ProductItem from "lib/presentation/components/items/product_item";
import { Product } from "lib/model/types/product";

const ProductList = () => {
  const [productList, setProductList] = useRecoilState(productListState);
  // 完了したTodoを削除
  const deleteTodo = (id: string) => {
    const target = productList.filter((product) => {
      return product.name != id;
    });
    setProductList(target);
  };

  return (
    <Box w="100%" overflow={"auto"} h="100vh">
      <SimpleGrid columns={3} spacing={0} alignItems="center">
        {productList.map((item: Product) => (
          <ProductItem
            key={item.name}
            product={item}
            onTap={() => deleteTodo(item.name)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
