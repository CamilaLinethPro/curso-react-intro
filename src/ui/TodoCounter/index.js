import './TodoCounter.css'
import React from 'react';

function TodoCounter({completedTodos,
  totalTodos, loading}){

    return (
      completedTodos === totalTodos ?
      <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading" }`}>
        Has completado todos tus TODOS 🤞😃
      </h1> 
      :
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos} </span>de <span>{totalTodos}</span> TODOS
      </h1> 
    );
  }

  export {TodoCounter }