import './CreateTodoButton.css'
import React from 'react';

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton"
            onClick={
                (event) => {
                    console.log('le diste click ')
                    console.log(event)
                    console.log(event.target)

                }
            }
        >+</button>
    );
}

export { CreateTodoButton }