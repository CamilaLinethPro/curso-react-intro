import './TodoCounter.css'
import React from 'react';

function TodoCounter({total, completed}){
    return (
      completed === total ?
      <h1 className="TodoCounter">
        Has completado todos tus TODOS 🤞😃
      </h1> 
      :
      <h1 className="TodoCounter">
        Has completado <span>{completed} </span>de <span>{total}</span> TODOS
      </h1> 
    );
  }

  export {TodoCounter }