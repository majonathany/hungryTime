import React from 'react';

function Body(props) {
    return (
        <div className="body-container">
            {props.children}
        </div>
    );
}

export default Body;
