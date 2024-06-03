

import React from 'react';
//import { AppUI } from './AppUI';

import { useTodos } from '../useTodos';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal';
import { TodoForm } from '../../ui/TodoForm';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';


function HomePage() {


    const {
        states, stateUpdaters, 
    } = useTodos();

    const navigate = useNavigate();

    const { 
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        // openModal,
    } = states;
    
    
    const {
        setSearchValue,
        // addTodo,
        completeTodo,
        deleteTodo,
        // setOpenModal,
        sincronizeTodos
    } = stateUpdaters;




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
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        // onEdit={() => edittodo(todo.text)}
                        onEdit={() => navigate('/edit/' + todo.id, {
                            state: {todo}, 
                        })}


                    />
                    )}
            </TodoList>

            <CreateTodoButton 
            onClick={()=> navigate('/new')}
            // setOpenModal={setOpenModal} 
            />
            {/* {openModal && (<Modal>
                <TodoForm
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                />
            </Modal>)} */}

            <ChangeAlert 
            sincronize = {sincronizeTodos}
            />

        </React.Fragment>
    )




}





export {HomePage};
