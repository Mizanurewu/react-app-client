import React from 'react';

const Category = ({ category }) => {
    const { name, logo, background } = category;
    return (
        <div className='hover:scale-105 transition-transform'>
            <div className={`w-full h-80 bg-[${background}] flex flex-col items-center justify-center rounded-lg`}>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h3 className='font-bold text-2xl'>{name}</h3>
                </div>
            </div>

        </div>



    );
};

export default Category;
