import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import course from '../../../assets/images/course/course.png'
import course1 from '../../../assets/images/course/course1.png'
import course2 from '../../../assets/images/course/course2.png'
import Course from '../../Home/Courses/Course';

const OnlineCourse = () => {
    const courses = [
        {
            id: 1,
            name: 'UI/UX Design',
            price: 254.36,
            img: course
        },
        {
            id: 2,
            name: 'CSS',
            price: 254.36,
            img: course1
        },
        {
            id: 3,
            name: 'UI/UX Design',
            price: 254.36,
            img: course2
        },
        {
            id: 4,
            name: 'CSS',
            price: 254.36,
            img: course2
        },
        {
            id: 5,
            name: 'Digital Marketing',
            price: 254.36,
            img: course1
        },
        {
            id: 6,
            name: 'CSS',
            price: 254.36,
            img: course
        },
        {
            id: 7,
            name: 'UI/UX Design',
            price: 254.36,
            img: course
        },
        {
            id: 8,
            name: 'CSS',
            price: 254.36,
            img: course1
        },
        {
            id: 9,
            name: 'UI/UX Design',
            price: 254.36,
            img: course2
        },
        {
            id: 10,
            name: 'CSS',
            price: 254.36,
            img: course2
        },
        {
            id: 11,
            name: 'Digital Marketing',
            price: 254.36,
            img: course1
        },
        {
            id: 12,
            name: 'CSS',
            price: 254.36,
            img: course
        }
    ]
    return (
        <div className='mt-24 p-6 bg-[#EDEEF3] pb-24'>
            <h4 className='text-xl text-[#6278FF] text-center'>Course List</h4>
            <h1 className='text-5xl font-semibold pt-4 text-center'>Our Online <br></br>Course</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 justify-center bg-[#EDEEF3]'>
                {
                    courses.map(course => <Course
                        key={course}
                        course={course}

                    ></Course>)
                }

            </div>

            <div className='flex justify-center items-center pt-24'>
                <button className="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    view All
                    <FontAwesomeIcon className='ms-3' icon={faArrowRight} />
                </button>

            </div>
        </div>
    );
};

export default OnlineCourse;