import React from 'react';
import Todos from './Todos'


function App() {

  

  const [todos, setTodos] = React.useState([
    {id:1, completed:false, title:"Купить шашлык"},
    {id:2, completed:false, title:'Купить яблоки'},
    {id:3, completed:false, title:'Купить груши'},
  ])

  function toggleTodo(id){
    setTodos(todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  

  return (
    <div className="App" >
     <h1>TodoList</h1>
      <Todos todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}
export default App;
