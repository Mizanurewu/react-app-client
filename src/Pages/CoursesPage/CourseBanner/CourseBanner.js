import React from 'react';
import course from '../../../assets/images/course/course.png'

const CourseBanner = () => {
    return (
        <div className='relative'>
            <div>
                <img className='w-full' src={course} alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="text-5xl text-white font-bold">Home > <span className='text-[#6278FF]'>About US</span></h1>
                </div>

            </div>
        </div>
    );
};

export default CourseBanner;