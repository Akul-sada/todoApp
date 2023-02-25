import React, { useState} from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";
function App() {
  const [inputText,setInputText] =useState("");
  const [todos,setTodos] =useState([]);
  return (
    <div className="App">
      <Header/>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
