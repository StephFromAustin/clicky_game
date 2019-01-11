// DEPENDENCIES | IMPORTS 
import React from 'react';

// JUMBOTRON 
const Jumbotron = props => (
    <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-4">{props.children}</h1>
                <p className="lead">{props.message}</p>
                <p>Current Score: {props.current} Top Score: {props.top}</p>
            </div>
        </div>
    </div>
)

// EXPORTS
export default Jumbotron;