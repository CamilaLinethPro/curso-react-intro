import React from 'react';
import { useLocalStorage } from './useLocalStorage';



function useTodos() {
    const { item: todos, saveItem: saveTodos, loading, error,sincronizeItem: sincronizeTodos  } = useLocalStorage('TODOS_V2', []);
    const [searchValue, setSearchValue] = React.useState('');
    // const [openModal, setOpenModal] = React.useState(false);

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


    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
        saveTodos(newTodos)
    }

    const editTodo = (id, newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos)
    }



    const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false, 
            id, 
        })
        saveTodos(newTodos);
    }

    const getTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        return todos[todoIndex]
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    }


    const states = { 
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        getTodo,
        // openModal,
    }

    const stateUpdaters = {
        setSearchValue,
        completeTodo,
        deleteTodo,
        // setOpenModal,
        addTodo,
        sincronizeTodos, 
        editTodo, 
    }
    return {
        states,  stateUpdaters  
           
    }; 
}

function newTodoId(todoList){
    if(!todoList.length){
        return 1;
    }
    const idList = todoList.map(todo => todo.id)
    const idMax = Math.max(...idList)
    
    return idMax + 1
}

export { useTodos }