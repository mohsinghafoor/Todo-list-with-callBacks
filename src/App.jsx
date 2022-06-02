import "./App.css";
import { useState } from "react";
import NewTodo from "./Dynamic/NewTodos/NewTodo";
import Todos from "./Dynamic/Todos/Todos";
import { Heading, Stack } from "@chakra-ui/react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Breakfast",
    time: 0.5,
  },
  { id: "e2", title: "Study", time: 4 },
  {
    id: "e3",
    title: "Movie",
    time: 1.5,
  },
  {
    id: "e4",
    title: "Lunch",
    time: 1,
  },
];
function App() {
  const [todo, setTodo] = useState(DUMMY_EXPENSES);
  const [edit, setEdit] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [index, setIndex] = useState();
  const handleAddTodo = (newData) => {
    setTodo((prevData) => {
      return [newData, ...prevData];
    });
  };
  const handleEditTodo = (newData) => {
    let updatedData = [...todo];
    updatedData[index] = newData;
    setTodo(updatedData);
  };
  const deleteItemHandler = (itemId) => {
    setTodo((prevTodos) => {
      const updatedTodo = prevTodos.filter((todo) => todo.id !== itemId);
      return updatedTodo;
    });
  };
  const editItemHandler = (editData) => {
    setEdit(true);
    setEnteredTime(editData.time);
    setEnteredTitle(editData.title);
    setIndex(editData.index);
  };
  return (
    <Stack
      w="100vw"
      h="100vh"
      bg="#e8effc"
      justifyContent={"center"}
      align="center"
    >
      <Heading>Things to do Today</Heading>
      <NewTodo
        onAddTodo={handleAddTodo}
        onEditTodo={handleEditTodo}
        edit={edit}
        setEdit={setEdit}
        enteredTitle={enteredTitle}
        enteredTime={enteredTime}
        setEnteredTitle={setEnteredTitle}
        setEnteredTime={setEnteredTime}
      />
      <Todos
        todos={todo}
        onDeleteItem={deleteItemHandler}
        onEditItem={editItemHandler}
      />
    </Stack>
  );
}

export default App;
