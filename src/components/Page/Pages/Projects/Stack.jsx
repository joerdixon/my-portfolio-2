import React from 'react';

function Stack({stack}) {

return(
    <div>
        <h1>stack:</h1>
        {stack.map((tech, index) => {
            return (
                <div key={index}>
                    {tech}
                </div>
            )
        })}
    </div>
)
};

export default Stack;