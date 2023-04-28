import ListItem from './ListItem';
import './ToDoInput.css';
import { useState } from 'react';

const ToDoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const inputHandler = event => {
    setInputValue(event.target.value);
  };
  const addToDo = todo => {
    if (!inputValue.trim()) {
      alert('Input value cannot be empty!');
      return;
    }
    setItems([...items, todo]);
    setInputValue('');
  };
  return (
    <>
      <div className="todo-container">
        <h2>To Do List</h2>
        <input
          onChange={value => inputHandler(value)}
          value={inputValue}
        ></input>
        <button onClick={() => addToDo(inputValue)}>Add ToDo</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} val={item} />
        ))}
      </ul>
    </>
  );
};

export default ToDoInput;
