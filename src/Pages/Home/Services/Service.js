import React from 'react';
import microsoft from '../../../assets/icons/home/microsoft.png'
import google from '../../../assets/icons/home/google.png'
import dribble from '../../../assets/icons/home/dribble.png'
import lattice from '../../../assets/icons/home/lattice.png'
import Image from './Image';

const image = [microsoft, google, dribble, lattice];

const Service = () => {
    return (

        <div className='bg-[#EDEEF3] p-10'>
            <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5   bg-white rounded-xl mx-auto justify-around items-center'>
                {/* <img src={google} alt="" />
                <img src={microsoft} alt="" />
                <img src={dribble} alt="" />
                <img src={lattice} alt="" /> */}
                {
                    image.map(imag => <Image
                        imag={imag}
                    ></Image>)
                }

            </div>
        </div>

    );
};

export default Service;