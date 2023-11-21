import React from 'react';

const MyComponent = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
}

export default MyComponent;