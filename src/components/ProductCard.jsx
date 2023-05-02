import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addCart } from "../features/cart/cartSlice";

function ProductCard(props) {
  const { product } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addTransaction = () => {
    dispatch(
      addCart({
        productId: product.id_products,
        productName: product.name,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={`http://localhost:8001/${product.imgPath}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          boxSize="150px"
          objectFit="cover"
          className="m-auto"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            //onClick={() => navigate("/product/" + product.id)}
          >
            See Detail
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => addTransaction()}
          >
            Add to transaction
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
