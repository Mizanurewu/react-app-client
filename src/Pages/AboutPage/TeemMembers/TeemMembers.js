import React from 'react';
import teacher1 from '../../../assets/images/teacher/teacher1.png'
import teacher2 from '../../../assets/images/teacher/teacher2.png'
import teacher3 from '../../../assets/images/teacher/teacher3.png'
import teacher4 from '../../../assets/images/teacher/teacher4.png'
import people5 from '../../../assets/images/teacher/people5.png'
import people6 from '../../../assets/images/teacher/people6.png'
import people7 from '../../../assets/images/teacher/people7.png'
import people8 from '../../../assets/images/teacher/people8.png'
import Teacher from '../../Home/Teachers/Teacher';

const TeemMembers = () => {
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
        },
        {
            id: 5,
            name: 'Mukyemi sha',
            des: 'Developer',
            img: people5
        },
        {
            id: 6,
            name: 'Mukyemi sha',
            des: 'Developer',
            img: people6
        },
        {
            id: 7,
            name: 'Mukyemi sha',
            des: 'Developer',
            img: people7
        },
        {
            id: 8,
            name: 'Mukyemi sha',
            des: 'Developer',
            img: people8
        }
    ]
    return (
        <div>
            <div className='bg-[#EDEEF3] p-10'>
                <h5 className='text-xl font-semibold text-center text-blue-400'>Team Member</h5>
                <h1 className='text-5xl text-center font-bold'>The Amazing  <br></br>Teem Of Us</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {teachers.map(teacher => <Teacher
                        key={teachers.id}
                        teacher={teacher}
                    ></Teacher>)}

                </div>
            </div>

        </div>
    );
};

export default TeemMembers;