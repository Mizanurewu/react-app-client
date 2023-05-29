import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import rating from '../../../assets/images/course/rating.png'


const Course = ({ course }) => {
    const { img, name, price } = course;
    return (
        <div className='mx-auto hover:scale-105 transition-transform'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-9">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="my-4">
                    <div className='flex justify-between'>
                        <h2 className="card-title font-bold">{name}</h2>
                        <div className='text-orange-400'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <div className='text-2xl text-blue-500'>$:{price}</div>
                        <div><button className="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Book Now
                        </button></div>

                    </div>
                    <div>
                        <img src={rating} alt="" />
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Course;