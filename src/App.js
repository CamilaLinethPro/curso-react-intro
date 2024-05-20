
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de Intro a React.js', completed: false}, 
  {text: 'LLorar con la llorona', completed: false}, 
  {text: 'Estar con mi amorcito', completed: false},
];

function App() {
  cons [todos, seTtodos] = React.useState();
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan TODOS de ' + searchValue);

  return (
    <>
      <TodoCounter completed = {16} total={25} />
      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed = {todo.completed}/>
        ))}
        
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}





export default App;
