import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import tes from '../../../assets/images/testimonial/tes.png'

const Testimonial = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse relative">
                <div className=''>
                    <img src={tes} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='absolute bottom-4 right-4'>
                    <div className=''>
                        <div className='w-[250px] h-36  bg-[#EDEEF3] border-2 rounded-xl border-black '></div>
                    </div>
                    <div className='absolute w-[200px] top-4 right-4 '>
                        <p>Lorem ipsum dolor iusto animi unde officia quos r odio rerum magnam ex delectus mollitia?</p>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold'>Romana Akter</h2>
                            <FontAwesomeIcon className=' text-orange-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-orange-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-orange-400' icon={faStar} />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 p-20'>
                    <h1 className="text-xl font-bold text-blue-500">Testimonial</h1>
                    <p className="py-6 text-5xl font-bold">What They Say?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum incidunt natus voluptate quae consequuntur. Fugiat,labore nulla consequuntur eum, officia dicta. Vel ducimus ad ratione numquam cum ratione possimus,<br></br><br></br> tempore facilis ducimus neque aperiam nemo quia et, eveniet veniam debitis.
                        Error assumenda consequatur quos quibusdam ex. Consequatur eaque coruntur t.</p>
                    <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                        Write Your Assignment
                        <FontAwesomeIcon className='ms-3' icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;