

import React from 'react';
//import { AppUI } from './AppUI';

import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert';


function App() {


    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos,
    } = useTodos();

    return (
        <React.Fragment>

            <TodoHeader loading={loading}>
            <TodoCounter
                    completedTodos={completedTodos}
                    totalTodos={totalTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                totalTodos={totalTodos}
                onError={() =>
                    <TodosError />
                }
                onLoading={() =>
                    <TodosLoading />
                }
                onEmptyTodos={() =>
                    <EmptyTodos />
                }
                onEmptySearchResults={(searchText) =>
                    <p> No hay resultados para {searchText}</p>
                }
            // render = {
            //     todo => ( <TodoItem
            //     key={todo.text}
            //     text={todo.text}
            //     completed={todo.completed}
            //     onComplete={() => completeTodo(todo.text)}
            //     onDelete={() => deleteTodo(todo.text)}
            //   />
            // )}
            >

                {
                    todo => (<TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    )}
            </TodoList>

            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal && (<Modal>
                <TodoForm
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                />
            </Modal>)}

            <ChangeAlert 
            sincronize = {sincronizeTodos}
            />

        </React.Fragment>
    )




}





export default App;
