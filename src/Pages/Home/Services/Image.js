import React from 'react';

const Image = ({ imag }) => {
    return (
        <div  className='hover:scale-105 transition-transform'>
            <div  className='m-5'>
                <img className='w-full' src={imag} alt="" />
            </div>
        </div>
    );
};

export default Image;