import React from 'react';
import microsoft from '../../../assets/icons/home/microsoft.png'
import google from '../../../assets/icons/home/google.png'
import dribble from '../../../assets/icons/home/dribble.png'
import lattice from '../../../assets/icons/home/lattice.png'

const Service = () => {
    return (
        <div className='bg-[#EDEEF3] pb-10'>
            <div className='mx-auto flex items-center justify-start w-4/5 h-48 bg-white shadow-xl rounded-xl'>
                <img src={google} alt="" />
                <img src={microsoft} alt="" />
                <img src={dribble} alt="" />
                <img src={lattice} alt="" />

            </div>
        </div>
    );
};

export default Service;