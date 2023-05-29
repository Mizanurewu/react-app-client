import React from 'react';
import location from '../../../assets/images/contact/location.png'
import phone from '../../../assets/images/contact/phone.png'
import contact from '../../../assets/images/contact/contact.png'
import calender from '../../../assets/images/contact/calender.png'

const ContactUs = () => {
    return (
        <div className=' bg-[#EDEEF3] p-8'>
            <h4 className='text-xl text-[#6278FF] text-center'>Course List</h4>
            <h1 className='text-5xl font-semibold pt-4 text-center'>Our Online <br></br>Course</h1>
            <div className="hero min-h-screen mx-auto  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-2/4">
                        <img src={contact} alt="" />
                    </div>

                    <div className="card flex-shrink-0 max-w-sm w-2/5">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold'>Get In Touch With US</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing tatem lau cupiditate.</p>
                            <div className='flex justify-center items-center my-4' >
                                <div className='p-3 mr-2 hover:scale-105 transition-transform'>
                                    <img className=' h-18 w-18' src={location} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>Our Address</h4>
                                    <p>
                                        road no 1232A Winseer  uttara Dhaka -1212
                                    </p>

                                </div>

                            </div>
                            <div className='flex justify-center items-center my-4' >
                                <div className='p-3 mr-2 h-[70px] w-[70px] hover:scale-105 transition-transform'>
                                    <img className='w-full ' src={phone} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>Our Address</h4>
                                    <p>
                                        Mobile: +880 1521-424233
                                    </p>
                                    <p>
                                        Email: mizanurewu@gmail.com
                                    </p>

                                </div>

                            </div>
                            <div className='flex justify-center items-center my-4' >
                                <div className='p-3 mr-2 h-[70px] w-[70px] hover:scale-105 transition-transform'>
                                    <img className='w-full ' src={calender} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>Contact Information</h4>
                                    <p>
                                        Mobile: +880 1521-424233
                                    </p>
                                    <p>
                                        Email: mizanurewu@gmail.com
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;