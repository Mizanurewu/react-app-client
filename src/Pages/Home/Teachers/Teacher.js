import React from 'react';
import bg from '../../../assets/images/teacher/bg.png'

const Teacher = ({ teacher }) => {
    const { name, img, des } = teacher;
    return (
        <div className=''>
           

            <div className='h-80 w-full flex flex-col p-8' >
                <div>
                    <img className='' src={img} alt="" />
                </div>
                <div className='relative'>
                    <img className='-mt-[140px] ' src={bg} alt="" />
                    <div className='absolute flex flex-col justify-center items-center bottom-[40px] left-[40px] text-white'>
                        <h1 className=' text-2xl font-bold bottom-20'>{name}</h1>
                        <p className='text-lg '>{des}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Teacher;