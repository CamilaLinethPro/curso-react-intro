import './TodosLoading.css';
import React from 'react';


function TodosLoading() {

    return (

        <div className="loader-container">
            <div className="loader"></div>
            <div className="loader-text">Loading...</div>
        </div>
    );
}

export { TodosLoading };