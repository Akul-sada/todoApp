import React,{Component, useState} from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import { Todo } from "./Components/Todo";
function App() {
  const [inputText,setInputText] =useState("");
  const [todos,setTodos] =useState([]);
  return (
    <div className="App">
      <Header/>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <Todo/>
    </div>
  );
}

export default App;
