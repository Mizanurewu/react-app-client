import React from 'react';
import banner1 from '../../../assets/images/banner1.png'
import watchVideo from '../..//../assets/icons/home/watchVideo.png'
import Polygon1 from '../../../assets/icons/home/Polygon1.png'
import mouse from '../../../assets/icons/home/mouse.png'
import Vector1 from '../../../assets/icons/home/Vector1.png'


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#EDEEF3] pb-[150px] overflow-hidden">
            <div className=''>
                <div className="hero-content relative flex-col lg:flex-row-reverse">
                    <img src={banner1} className="max-w-sm rounded-lg " />
                    <div className="absolute flex items-center justify-center top-1/4 right-[50px]">
                        <img src={mouse} className="w-12 h-12 " alt="Icon" />
                    </div>
                    <div className="absolute flex items-center justify-center top-28 right-72">
                        <img src={Polygon1} className="w-12 h-12 " alt="Icon" />
                    </div>
                    <div>
                        <h1 className="text-[80px] font-bold">For Every Stuents<br></br> Every Classroom.<br></br>
                            <span className='text-blue-500'>Real results</span> </h1>
                        <p className="py-6">But I explain to you how all this mistaken idea of denoucing pleasure and design pain<br></br>
                            was born and i will give you a completelerem ipsum dolor site amet, consectetus adipi<br></br>
                            scing elit, sed do eiusm</p>
                        <div className='flex items-center justify-start'>
                            <button class="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Get Started
                            </button>
                            <button class=" hover:bg-blue-700 rounded-full">
                                <img src={watchVideo} alt="" />
                            </button>
                            <p className='font-bold'>Watch Video</p>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-30 -left-8'>
                    <img src={Vector1} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;