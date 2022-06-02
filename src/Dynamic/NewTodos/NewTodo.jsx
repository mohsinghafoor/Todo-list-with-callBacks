import React from "react";
import TodosForm from "./TodosForm";

const NewTodo = (props) => {
  const saveNewTodoHandler = (enteredData) => {
    const todosData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddTodo(todosData);
  };
  const saveEditTodoHandler = (enteredData) => {
    const todosData = {
      ...enteredData,
    };
    props.onEditTodo(todosData);
  };

  return (
    <div className="new-expense">
      <TodosForm
        edit={props.edit}
        setEdit={props.setEdit}
        saveNewTodoHandler={saveNewTodoHandler}
        saveEditTodoHandler={saveEditTodoHandler}
        enteredTitle={props.enteredTitle}
        enteredTime={props.enteredTime}
        setEnteredTitle={props.setEnteredTitle}
        setEnteredTime={props.setEnteredTime}
      />
    </div>
  );
};

export default NewTodo;
