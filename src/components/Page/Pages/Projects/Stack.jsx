import React from 'react';

function Stack({ stack }) {

    return (
        <div>
            <h1>stack:</h1>
            <div className='flex'>
                {stack.map((tech, index) => {
                    return (
                        <div key={index} className='p-2'>
                            {tech}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Stack;