
import { useLocalStorage } from './useLocalStorage';

import React from 'react';
import { AppUI } from './AppUI';

// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de Intro a React.js', completed: true}, 
//   {text: 'LLorar con la llorona', completed: false}, 
//   {text: 'Estar con mi amorcito', completed: false},
//   {text: 'Salir con mi amorcito', completed: true},
// ];


// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App() {
  const {item : todos , saveItem : saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length


  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes
      (searchText)
    }
  );

  

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
    saveTodos(newTodos)
  }

  
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos)
  }

 return (
  <AppUI
    completedTodos = {completedTodos}
    totalTodos = {totalTodos} 
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    loading = {loading}
    error = {error}
  />
 )
}





export default App;
