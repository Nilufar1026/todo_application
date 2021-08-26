import React ,{useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model'



const App:React.FC=()=> {
  const [todos,setTodos]=useState<Todo[]>([])
  
  const todoAddHangler=(text:string)=>{
    setTodos(prevTodos=>[
      ...prevTodos,
      {id:Math.random().toString(),text:text}
    ])
  }

  const todoDeleteHandler=(todoId:string)=>{
    setTodos(prevTodos=>{
      return prevTodos.filter(todo=>todo.id !== todoId)
    })
  }

  
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <NewTodo onAddTodo={todoAddHangler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
      
    </div>
  );
}

export default App;
