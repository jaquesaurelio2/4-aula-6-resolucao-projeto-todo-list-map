/**
  - Faça a renderização dos itens da lista utilizando map e 
  os dados importados
  - Será necessário passar o título do item via props 
 */

import * as React from "react";
import "./styles.css";
import Item from "./components/Item";
import Form from "./components/Form";
import todos from "../data";

export default function App() {
  const items = todos.map((todo) => (
    <Item key={todo.id} title={todo.title} completed={todo.completed} />
  ));

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form />
      {items}
    </div>
  );
}
