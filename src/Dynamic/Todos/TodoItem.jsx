import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

export default function TodoItem(props) {
  const handleDlt = (id) => {
    props.dltHandler(id);
  };
  const handleEdit = (props) => {
    props.editHandler(props);
  };
  return (
    <HStack
      borderBottom={"1px solid #F8F8FF"}
      justify={"space-between"}
      py="5"
      px="15"
      key={props.id}
      color="white"
    >
      <Text>{props.title}</Text>
      <Text>{props.time} hours</Text>
      <HStack spacing={30}>
        <FaTrashAlt
          onClick={() => handleDlt(props.id)}
          style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
        />
        <FaEdit
          onClick={() => handleEdit(props)}
          style={{ cursor: "pointer", color: "#191970", fontSize: "20px" }}
        />
      </HStack>
    </HStack>
  );
}
