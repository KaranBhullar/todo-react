import { useState } from "react";
import Checkbox from "../Components/Checkbox";
import Input from "../Components/Input";
import Task from "../Components/Task";
import "./Todo.css"

function Todo() {
    const [listEle, setListEle] = useState('');
    const [listName, setListName] = useState('');
    const [todoList, setTodoList] = useState<JSX.Element[]>([]);
    const d = new Date();

    return(
        <div>
            <div className="flex justify-center">
                <Input placeHolder="Enter List Name" input={setListName} className="text-7xl text-center border-none bg-transparent" />
            </div>
            <h1 className="text-3xl font-bold underline">WORKING</h1>
            <Input placeHolder="Enter Item" input={setListEle}/>
            <button  onClick={btnClick}>Add To List</button>
            <Checkbox list={todoList} />
        </div>
    );
    function btnClick() {
        const id = Math.random().toString(36)
        if(listEle.trim() == '') {return;} 
        setTodoList(currList => [...currList, <Task title={listEle} date={d} id={id}/>])
    }
    
}

export default Todo;

// import React, { useState } from 'react';

// interface TodoItem {
//  id: string;
//  text: string;
//  completed: boolean;
// }

// const Todo: React.FC = () => {
//  const [todos, setTodos] = useState<TodoItem[]>([]);
//  const [newTodoText, setNewTodoText] = useState('');

//  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//    setNewTodoText(event.target.value);
//  };

//  const addTodo = () => {
//    if (newTodoText.trim()) {
//      setTodos([
//        ...todos,
//        { id: Math.random().toString(36), text: newTodoText, completed: false },
//      ]);
//      setNewTodoText('');
//    }
//  };

//  const deleteTodo = (id: string) => {
//    setTodos(todos.filter(todo => todo.id !== id));
//  };

//  const toggleTodoComplete = (id: string) => {
//    setTodos(todos.map(todo =>
//      todo.id === id ? { ...todo, completed: !todo.completed } : todo
//    ));
//  };

//  return (
//    <div>
//      <h2>Todo List</h2>
//      <input
//        type="text"
//        value={newTodoText}
//        onChange={handleInputChange}
//        placeholder="Add a new todo"
//      />
//      <button style={{margin: 10}} onClick={addTodo}>Add</button>

//      <ul>
//        {todos.map(todo => (
//          <li key={todo.id}>
//            <input
//              type="checkbox"
//              checked={todo.completed}
//              onChange={() => toggleTodoComplete(todo.id)}
//            />
//            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//              {todo.text}
//            </span>
//            <button style={{marginLeft: 10}} onClick={() => deleteTodo(todo.id)}>Delete</button>
//          </li>
//        ))}
//      </ul>
//    </div>
//  );
// };

// export default Todo;
