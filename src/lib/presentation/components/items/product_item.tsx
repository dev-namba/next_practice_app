import {
  Flex,
  Box,
  useColorModeValue,
  Circle,
  Badge,
  Tooltip,
  chakra,
  Icon,
  Image,
} from "@chakra-ui/react";
import RatingItem from "./rating_item";

import { FiShoppingCart } from "react-icons/fi";
import { FC } from "react";
import { Product } from "lib/model/types/product";
type ProductProps = {
  product: Product;
  onTap?: VoidFunction;
};
const ProductItem: FC<ProductProps> = (props) => (
  <Flex p={50} w="full" alignItems="center" justifyContent="center">
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {props.product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />
      )}

      <Image
        src={props.product.imageURL}
        alt={`Picture of ${props.product.name}`}
        roundedTop="lg"
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {props.product.isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">
            {props.product.name}
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <RatingItem
            rating={props.product.rating}
            numReviews={props.product.numReviews}
          />
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              £
            </Box>
            {props.product.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  </Flex>
);

export default ProductItem;
