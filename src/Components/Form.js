import React from "react";
import uuid from 'react-uuid';
import '../App.css';

const Form =({setInputText,setTodos,inputText,todos})=>{
  const inputTextHandler =(e)=>{
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler =(e)=>{
    e.preventDefault();
    setTodos([...todos,{text:inputText,completed:false,id:uuid()}]);
    setInputText('');
  };
  const statusHandler=(e)=>{
    console.log(e.target.value);

  }
    return(<>
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" name="todo" placeholder="Enter The Todos Here"/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </>);
}
export default Form;