import React from 'react';
import Us from './Us';
import expe from '../../../assets/icons/about/expe.png'
import teem from '../../../assets/icons/about/teem.png'
import pricing from '../../../assets/icons/about/pricing.png'


const WhyUs = () => {
    const experiances=[
        {
            id:1,
            img:expe,
            name:'Great Experiance',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae nostrum suscipit doloribus qui. Quia possimus excepturi itaque blanditiis necessitatibus, eum quas sit amet sequi dolores perspiciatis ut laudantium reprehenderit!'

        },
        {
            id:2,
            img:teem,
            name:'Dedicate Teem',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae nostrum suscipit doloribus qui. Quia possimus excepturi itaque blanditiis necessitatibus, eum quas sit amet sequi dolores perspiciatis ut laudantium reprehenderit!'

        },
        {
            id:3,
            img:pricing,
            name:'Flexible Pricing',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae nostrum suscipit doloribus qui. Quia possimus excepturi itaque blanditiis necessitatibus, eum quas sit amet sequi dolores perspiciatis ut laudantium reprehenderit!'

        }
    ]
    return (
        <div className='bg-[#EDEEF3] p-8'>
            <div>
                <h1 className='mt-16 p-8 text-5xl font-bold text-center' >Why US ?</h1>
                <p className='text-center '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi doloribus iste maxime! Minima<br></br> facilis, labore itaque amet nisi officiis id illum placeat maiores maxime, eveniet recusandae voluptate,<br></br> a tenetur!
                </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
                {
                    experiances.map(exp=><Us
                    exp={exp}
                    ></Us>)
                   

                }

            </div>
        </div>
    );
};

export default WhyUs;