import React from 'react';
import teacher1 from '../../../assets/images/teacher/teacher1.png'
import teacher2 from '../../../assets/images/teacher/teacher2.png'
import teacher3 from '../../../assets/images/teacher/teacher3.png'
import teacher4 from '../../../assets/images/teacher/teacher4.png'
import Teacher from './Teacher';

const Teachers = () => {
    const teachers = [
        {
            id: 1,
            name: 'Pushpa Kanon',
            des: 'CEO, Derhob',
            img: teacher1
        },
        {
            id: 2,
            name: 'Lolonfa Khan',
            des: 'UI Designer',
            img: teacher2
        },
        {
            id: 3,
            name: 'Jahaanr Khan',
            des: 'UX Designer',
            img: teacher3
        },
        {
            id: 4,
            name: 'Mukyemi sha',
            des: 'Developer',
            img: teacher4
        }
    ]


    return (
        <div className='bg-[#EDEEF3] p-16'>
            <h5 className='text-xl font-semibold text-center text-blue-400'>Team Member</h5>
            <h1 className='text-5xl text-center font-bold'>Popular Professional <br></br>Teachers</h1>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {teachers.map((teacher) => (
                    <Teacher key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    );
};

export default Teachers;