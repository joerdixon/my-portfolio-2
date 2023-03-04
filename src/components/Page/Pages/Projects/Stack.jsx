import React from 'react';

// TODO: Map an icon instead of just the name.
// TODO: Name tooltip on hover.

function Stack({ stack }) {

    return (
        <div>
            <div className='flex justify-evenly items-center'>
                {stack.map((tech, index) => {
                    return (
                        <div key={index} className='border rounded-2xl text-sm'>
                            {tech[0]}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Stack;