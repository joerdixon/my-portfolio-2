import React from 'react';

function Stack({ stack }) {

    return (
        <div>
            <h1 className='pb-4'>Stack:</h1>
            <div className='flex justify-evenly items-center'>
                {stack.map((tech, index) => {
                    return (
                        <div key={index} className='w-[5rem] border rounded-2xl text-sm'>
                            {tech}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Stack;