import React from 'react';
import bg from '../../../assets/images/teacher/bg.png'

const Teacher = ({ teacher }) => {
    const { name, img, des } = teacher;
    return (
       
        <div className='my-6 hover:scale-105 transition-transform rounded-xl'>
            <div className="relative">
                <div className="h-80 rounded-xl">
                    <img src={img} className="w-full h-full rounded-xl object-cover" />
                </div>
                <div className="absolute -bottom-4 left-0 w-full">
                    <div className="flex justify-center py-4">
                        <div className="bg-[#6278FF] text-white px-8 py-4 rounded-b-3xl font-bold">
                            <h1 className='text-2xl font-bold'>{name}</h1>
                            <p>{des}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Teacher;