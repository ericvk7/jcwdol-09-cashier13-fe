import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../features/product/productSlice";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import {
  Button,
  Select,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { increment, decrement } from "../features/counter/counterSlice";
import { deleteCart } from "../features/cart/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const productValue = useSelector((state) => state.product.productValue);
  const categoryValue = useSelector((state) => state.product.categoryValue);
  const cartList = useSelector((state) => state.cart.cartList);

  const [inputText, setInputText] = useState("");
  const [dropDown, UseDropDown] = useState("");
  const [shortHendeler, UseShortHendeler] = useState();
  const [acddec, UseAcddec] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const [cartItems, setCartItems] = useState("");

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  let totalPrice = 0;
  const rows = cartList.map((item, index) => {
    const subtotal = item.quantity * item.price;
    totalPrice += subtotal;
  });

  const btnRef = React.useRef(null);

  let inputTextHendeler = (e) => {
    var dataInput = e.target.value;
    setInputText(dataInput);
  };

  let dropDownHendeler = (e) => {
    var dataInput = e.target.value;
    UseDropDown(dataInput);
  };

  let shortByHendler = (e) => {
    var dataInput = e.target.value;
    UseShortHendeler(dataInput);
  };
  let acddecHendelr = (e) => {
    var dataInput = e.target.value;
    UseAcddec(dataInput);
  };

  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(productValue.length / PER_PAGE);
  const _DATA = usePagination(productValue, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const renderProductList = () => {
    const filterData = _DATA.currentData().filter((el) => {
      if (inputText == "" && dropDown == "") {
        return el;
      }
      if (!dropDown == "" && inputText == "") {
        return el.id_categories == dropDown;
      }
      if (!inputText == "" && dropDown == "") {
        return el.name.includes(inputText);
      }
      if (!inputText == "" && !dropDown == "") {
        return el.id_categories == dropDown && el.name.includes(inputText);
      }
    });

    return filterData.map((product) => {
      return <ProductCard product={product} />;
    });
  };

  const renderCategoryDropDown = () => {
    return categoryValue.map((newCategory) => {
      return (
        <option value={newCategory.id_categories}>{newCategory.name}</option>
      );
    });
  };

  const increaseQty = (productId) => {
    alert(productId);
  };

  const decreaseQty = (productId) => {
    alert(productId);
  };

  const renderCartList = () => {
    return cartList.map((cart, index) => {
      return (
        <Tr>
          <Td>{index + 1}</Td>
          <Td>{cart.productName}</Td>
          <Td>
            <Button onClick={() => decreaseQty(cart.productId)}>-</Button>
            {cart.quantity}
            <Button onClick={() => increaseQty(cart.productId)}>+</Button>
          </Td>
          <Td>{formatPrice(cart.price)}</Td>
          <Td>{formatPrice(cart.quantity * cart.price)}</Td>
          <Td>
            <Button colorScheme="red" onClick={() => dispatch(deleteCart())}>
              Delete
            </Button>
          </Td>
        </Tr>
      );
    });
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Stack
        className="flex flex-row justify-center mb-4 "
        direction="row"
        spacing={4}
        align="center"
      >
        <div>
          <h2>Short By Category</h2>
          <Select
            placeholder="Select Category"
            className="m-auto w-3/4 mr-8"
            onChange={dropDownHendeler}
          >
            {renderCategoryDropDown()}
          </Select>
        </div>

        <div>
          <h2>Category</h2>
          <Select
            placeholder="Short by"
            className="m-auto w-3/4 mr-8"
            onChange={shortByHendler}
          >
            <option value={1}>Name</option>
            <option value={2}>Price</option>
          </Select>
        </div>
        <div>
          <h2>Category</h2>
          <Select
            placeholder="Short"
            className="m-auto w-3/4 mr-8"
            onChange={acddecHendelr}
          >
            <option value="acd">Ascending</option>
            <option value="dce">Descending</option>
          </Select>
        </div>

        <div>
          <h1>Search</h1>
          <div className="search">
            <input
              onChange={inputTextHendeler}
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="invoice">
            <Button mt={3} ref={btnRef} onClick={onOpen}>
              Transaction
            </Button>

            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={scrollBehavior}
              size={"2xl"}
            >
              <ModalOverlay />
              <ModalContent>
                <div className="grid grid-cols-2">
                  <ModalHeader>Transaction List</ModalHeader>
                  <ModalHeader>
                    Date:{" "}
                    {transactionDate.toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </ModalHeader>
                </div>
                <ModalCloseButton />
                <ModalBody>
                  <div>
                    <TableContainer>
                      <Table variant="simple">
                        <TableCaption>
                          Click Create Transaction to Create List
                        </TableCaption>
                        <Thead>
                          <Tr>
                            <Th>No.</Th>
                            <Th>Name</Th>
                            <Th>Quantity</Th>
                            <Th>Price</Th>
                            <Th>Subtotal</Th>
                            <Th>Status</Th>
                          </Tr>
                        </Thead>
                        <Tbody>{renderCartList()}</Tbody>
                        <Tfoot>
                          <Tr>
                            <Th>Total Transaction</Th>
                            <Th></Th>
                            <Th>{formatPrice(totalPrice)}</Th>{" "}
                            {/* Display the total price */}
                          </Tr>
                        </Tfoot>
                      </Table>
                    </TableContainer>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Return</Button>
                  <Button onClick={onClose}>Create Transaction</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </Stack>

      <div className="grid grid-cols-4 gap-10 m-auto w-3/4 ">
        {renderProductList()}
      </div>
      <div className="flex flex-row justify-center mt-4">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Product;
