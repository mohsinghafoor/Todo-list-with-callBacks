import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TodosForm = ({
  saveNewTodoHandler,
  saveEditTodoHandler,
  edit,
  setEdit,
  enteredTime,
  enteredTitle,
  setEnteredTime,
  setEnteredTitle,
}) => {
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const todoData = {
      title: enteredTitle,
      time: enteredTime,
    };
    saveNewTodoHandler(todoData);
    setEnteredTitle("");
    setEnteredTime("");
  };
  const updateHandler = (event) => {
    event.preventDefault();
    const todoData = {
      title: enteredTitle,
      time: enteredTime,
    };
    saveEditTodoHandler(todoData);
    setEnteredTitle("");
    setEnteredTime("");
    setEdit(false);
  };

  return (
    <form>
      <Stack
        w="650px"
        bg="#a892ee"
        py="20px"
        px="15px"
        rounded="10"
        align={"center"}
      >
        <Flex>
          <Stack h="90px" w="320px" mx="3">
            <Text h="5px" px="3">
              Title
            </Text>
            <Input
              h="40px"
              w="97%"
              border={"3px solid gray"}
              _focus={{ border: "3px solid #699DFF" }}
              rounded="8px"
              fontSize={"16px"}
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </Stack>
          <Stack h="90px" pb="30px" w="320px" mx="3">
            <Text h="5px" px="3">
              Ammount
            </Text>
            <Input
              h="40px"
              w="97%"
              border={"3px solid gray"}
              _focus={{ border: "3px solid #699DFF" }}
              rounded="8px"
              fontSize={"16px"}
              type="number"
              min="0.1"
              step="0.1"
              value={enteredTime}
              onChange={timeChangeHandler}
            />
          </Stack>
        </Flex>

        {!edit && (
          <Button
            bg="#04aa6d"
            rounded="8px"
            fontWeight="700"
            fontSize="18px"
            h="45px"
            color={"white"}
            border="none"
            cursor="pointer"
            onClick={addHandler}
            w="250px"
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
            h="45px"
            color={"white"}
            border="none"
            cursor="pointer"
            onClick={updateHandler}
            w="250px"
          >
            Update
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default TodosForm;
