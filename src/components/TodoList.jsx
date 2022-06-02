import {
  Button,
  Center,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { FaTrash, FaEdit, FaSearch } from "react-icons/fa";

export default function TodoList() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState();
  const handleDelete = (index) => {
    let copy = [...data];
    copy.pop(index);
    setData(copy);
  };
  const handleEdit = (index) => {
    setInput(data[index]);
    setEdit(true);
    setIndex(index);
  };
  const handleAdd = () => {
    let copy = [...data];
    copy.push(input);
    setData(copy);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  const handleUpdate = () => {
    setEdit(false);
    let copy = [...data];
    copy[index] = input;
    setData(copy);
    setInput("");
  };
  const handleSearch = () => {
    let copy = [...data];
    const filteredData = copy.filter((newData) => {
      return newData === filter;
    });
    setData(filteredData);
  };
  return (
    <Center
      w="100vw"
      h="100vh"
      bg=" linear-gradient(0deg, rgba(113, 97, 239, 0.05), rgba(113, 97, 239, 0.05)), #FFFFFF"
    >
      <Stack w="400px" minH="400px" rounded="8px" bg="#7B68EE" p="10px">
        <HStack w="full" justifyContent={"center"} px="3" h="70px">
          <Input
            h="40px"
            w="95%"
            border={"3px solid gray"}
            _focus={{ border: "3px solid #699DFF" }}
            rounded="8px"
            fontSize={"16px"}
            value={input}
            onChange={handleChange}
            color={"gray.300"}
          />
          {!edit && (
            <Button
              bg="#04aa6d"
              rounded="8px"
              fontWeight="700"
              fontSize="18px"
              w="80px"
              h="45px"
              color={"white"}
              border="none"
              cursor="pointer"
              onClick={handleAdd}
              isDisabled={input === "" ? true : false}
              _disabled={{ opacity: 0.5 }}
            >
              Add
            </Button>
          )}
          {edit && (
            <Button
              bg="#04aa6d"
              rounded="8px"
              fontWeight="700"
              fontSize="18px"
              w="80px"
              h="45px"
              color={"white"}
              border="none"
              cursor="pointer"
              onClick={handleUpdate}
              isDisabled={input === "" ? true : false}
              _disabled={{ opacity: 0.5 }}
            >
              Update
            </Button>
          )}
        </HStack>
        <InputGroup>
          <Input
            h="40px"
            border={"3px solid gray"}
            _focus={{ border: "3px solid #699DFF" }}
            rounded="8px"
            fontSize={"16px"}
            w="100% "
            pl="3"
            color={"gray.300"}
            onChange={handleSearchChange}
          />
          <InputRightElement h="50px" mr="10px" color="lightgray">
            <FaSearch onClick={handleSearch} />
          </InputRightElement>
        </InputGroup>

        {data.map((item, index) => (
          <HStack rounded="8px" px="20px" bg="#778899">
            <Text fontSize={"16px"} color="white">
              {item}
            </Text>
            <Spacer />
            <FaTrash
              onClick={() => handleDelete(index)}
              style={{
                cursor: "pointer",
                color: "red",
                paddingLeft: "10px",
                paddingRight: "10px",

                fontSize: "18px",
              }}
            />
            <FaEdit
              onClick={() => handleEdit(index)}
              style={{
                fontSize: "18px",
                cursor: "pointer",
                color: "#008080",
                cursor: "pointer",
              }}
            />
          </HStack>
        ))}
        {/* <Table variant="simple">
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td>{item}</Td>
                <Td isNumeric>
                  <FaTrash
                    onClick={() => handleClick(index)}
                    style={{
                      cursor: "pointer",
                      color: "red",
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table> */}
      </Stack>
    </Center>
  );
}
