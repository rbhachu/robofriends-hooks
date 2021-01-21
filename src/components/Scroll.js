import React from 'react';

const Scroll = (props) => { // jsx css must be camelCase, css would be overflow-y
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px', backgroundColor: '#ccc'}}> 
            {props.children}
        </div>
    );
};

export default Scroll; 