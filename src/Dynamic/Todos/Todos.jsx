import { Stack } from "@chakra-ui/react";
import React from "react";
import TodoItem from "./TodoItem";
export default function Todos(props) {
  return (
    <Stack bg="#9932CC" w="680px" py="10" rounded={"10px"}>
      {props.todos.map((item, index) => (
        <TodoItem
          // onPress={props?.handleCallBack}
          key={item.id}
          index={index}
          title={item.title}
          time={item.time}
          id={item.id}
          dltHandler={props.onDeleteItem}
          editHandler={props.onEditItem}
        />
      ))}
    </Stack>
  );
}
