import React from 'react';
import people1 from '../../../../assets/icons/home/about/people1.png'
import Rectangle7 from '../../../../assets/icons/home/about/Rectangle7.png'
import Rectangle8 from '../../../../assets/icons/home/about/Rectangle8.png'

const About = () => {
    return (

        <div className="hero min-h-screen sm:hidden md:hidden lg:block">
            <div className="hero-content flex-col lg:flex-row relative p-20 ">
                <img src={people1} className="z-50 " />
                <img src={Rectangle7} className="z-30 absolute top-10 right-[370px]" />
                <img src={Rectangle8} className="z-20 absolute bottom-6 left-6" />

                <div className='ps-10'>
                    <h1 className="text-xl font-bold">About Us</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur ahil vitae, corrupti, est quisquam qua, !
                        Adipisci aperiam molestiae enim mollitia commodi nobis porro quod voluptatibus dolor eius sint placusanda temporibus?
                        Porro suscipit temporibus dicta accusamus aut alias harum repellendus ea ratione voluptates <br></br><br></br>non recusandae modi, enim labore consequatur! Animi id unde quasi ducimus expedita error consectetur commodi esse repudiandae veniam?
                        Adipisci, et optio repell atque nobis </p>
                        <button className="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button>
                </div>
            </div>
        </div>
        // <div className='bg-red-500 flex p-10 relative'>
        //     <div className='w-2/3 p-10'>
        //         <img src={people1} className="z-50 absolute" />
        //         <img src={Rectangle7} className="z-40 absolute top-2 right-[480px]" />
        //         <img src={Rectangle8} className="z-30 absolute bottom-6 left-6" />

        //     </div>
        //     <div className='w-2/6'>
        //         <p className="py-6">Lorem ipsum dolor sit amet consectetur ahil vitae, corrupti, est quisquam qua, !
        //             Adipisci aperiam molestiae enim mollitia commodi nobis porro quod voluptatibus dolor eius sint placusanda temporibus?
        //             Porro suscipit temporibus dicta accusamus aut alias harum repellendus ea ratione voluptates <br></br><br></br>non recusandae modi, enim labore consequatur! Animi id unde quasi ducimus expedita error consectetur commodi esse repudiandae veniam?
        //             Adipisci, et optio repell atque nobis </p>
        //         <button className="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        //             Learn More
        //         </button>

        //     </div>
        // </div>


    );
};

export default About;