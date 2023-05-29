import React from 'react';

const Us = ({exp}) => {
    const {name,img, des}=exp;
    return (
        <div>
           <div className='flex flex-col justify-center items-center'>
            <img className='' src={img} alt="" />
            <h1 className='mt-4 text-xl font-bold'>{name}</h1>

           </div>
           <p className='mt-3 text-center'>{des}</p>
        </div>
    );
};

export default Us;