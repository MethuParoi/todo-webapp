import { useState } from 'react'
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
const [todos, setTodos] = useState([]);

// fetch("http://localhost:3000/todo")
//   .then(async (res) => {
//     const jsondata = await res.json();
//     setTodos(jsondata.todos);
//   })

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
