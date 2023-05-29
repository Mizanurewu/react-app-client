import React from 'react';

const Question = () => {
    return (
        <div className='bg-[#EDEEF3]'>
            <h4 className='text-xl text-[#6278FF] text-center'>Course List</h4>
            <h1 className='text-5xl font-semibold pt-4 text-center'>Our Online <br></br>Course</h1>
            <div className='w-3/4 mx-auto'>
                <div className='flex flex-col lg:flex-row  justify-between my-2'>
                    <div className='w-full lg:w-1/3'>
                        <label className='font-bold text-xs py-2' htmlFor="name">Your Name</label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full lg:w-1/3 mt-4 lg:mt-0'>
                        <label className='font-bold text-xs py-2' htmlFor="name">Email Address</label>
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between my-2'>
                    <div className='w-full lg:w-1/3'>
                        <label className='font-bold text-xs py-2' htmlFor="name">Type Your Subject Here</label>
                        <input type="text" placeholder="Type Your Subject Here" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full lg:w-1/3 mt-4 lg:mt-0'>
                        <label className='font-bold text-xs py-2' htmlFor="name">Phone Number</label>
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className=''>
                    <p className=''>Message...</p>
                    <textarea className="w-full h-[200px] textarea textarea-bordered" placeholder="Type Your message here"></textarea>
                </div>
                <div className="flex justify-start items-center">
                    <input type="checkbox" className="checkbox border mr-3"  />
                    <span className="label-text font-bold">Accept <span className='text-red-600'>terms</span> and <span className='text-red-600'>privacy policy</span></span>


                </div>
                <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                   Submit message
                </button>
            </div>
        </div>
    );
};

export default Question;