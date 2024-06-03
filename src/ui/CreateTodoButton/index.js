import './CreateTodoButton.css'
import React from 'react';

function CreateTodoButton( props ) {
    return (
        <button className="CreateTodoButton"
            onClick={
                props.onClick
            }
        >+</button>
    );
}

export { CreateTodoButton }