import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Course from './Course';
import course1 from '../../../assets/images/course/course1.png'
import course2 from '../../../assets/images/course/course2.png'
import course3 from '../../../assets/images/course/course3.png'
import course4 from '../../../assets/images/course/course4.png'
import course5 from '../../../assets/images/course/course5.png'
import course6 from '../../../assets/images/course/course6.png'

const Courses = () => {
    const courses = [
        {
            id: 1,
            name: 'UI/UX Design',
            price: 254.36,
            img: course1
        },
        {
            id: 2,
            name: 'CSS',
            price: 254.36,
            img: course2
        },
        {
            id: 3,
            name: 'UI/UX Design',
            price: 254.36,
            img: course3
        },
        {
            id: 4,
            name: 'CSS',
            price: 254.36,
            img: course4
        },
        {
            id: 5,
            name: 'Digital Marketing',
            price: 254.36,
            img: course5
        },
        {
            id: 6,
            name: 'CSS',
            price: 254.36,
            img: course6
        }
    ]
    return (
        <div className='mt-16 p-6 bg-[#EDEEF3] pb-24'>
            <h4 className='text-xl text-[#6278FF]'>Course List</h4>
            <h1 className='text-5xl font-semibold pt-4'>Find Your Perfect <br></br>Course</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 justify-center bg-[#EDEEF3]'>
                {
                    courses.map(course => <Course
                        key={course}
                        course={course}

                    ></Course>)
                }

            </div>

            <div className='flex justify-center items-center pt-24'>
                <button className="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transition-transform">
                    View All
                    <FontAwesomeIcon className='ms-3' icon={faArrowRight} />
                </button>
               
            </div>
        </div>
    );
};

export default Courses;