import React from 'react';
import handshake from '../../../assets/images/contact/handshake.png'

const ContactBanner = () => {
    return (
        <div className='relative'>
            <div>
                <img className='w-full p-4' src={handshake} alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="text-5xl text-white font-bold">Home > <span className='text-[#6278FF]'>Contact</span></h1>
                </div>

            </div>
        </div>
    );
};

export default ContactBanner;