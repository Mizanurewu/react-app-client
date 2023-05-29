import React from 'react';
import banner1 from '../../../assets/images/banner1.png'
import watchVideo from '../..//../assets/icons/home/watchVideo.png'
import Polygon1 from '../../../assets/icons/home/Polygon1.png'
import mouse from '../../../assets/icons/home/mouse.png'
import Vector1 from '../../../assets/icons/home/Vector1.png'
import Vector3 from '../../../assets/icons/home/Vector3.png'
import Vector4 from '../../../assets/icons/home/Vector4.png'
import Vector2 from '../../../assets/icons/home/Vector2.png'


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#EDEEF3] pb-[150px] overflow-hidden" style={{ position: 'relative', zIndex: '1' }}>
            <div className=''>
                <div className="hero-content relative flex-col lg:flex-row-reverse">
                    <div className='sm:hidden md:hidden lg:block'>
                        <img src={banner1} className="max-w-sm rounded-lg z-50 relative" alt='m' />
                        <div className="absolute flex items-center justify-center top-1/4 right-[10px]">
                            <img src={mouse} className="w-full " alt="Icon" />
                        </div>
                        <div className="absolute flex items-center justify-center top-28 right-72">
                            <img src={Polygon1} className="w-full " alt="Icon" />
                        </div>
                        <div className="absolute flex items-center justify-center top-[110px] right-[10px] z-0">
                            <img src={Vector3} className="w-full" alt="Icon" />
                        </div>
                        <div className="absolute flex items-center justify-center bottom-[110px] right-[100px] z-0">
                            <img src={Vector4} className="w-full" alt="Icon" />
                        </div>
                        <div className="absolute flex items-center justify-center top-[400px] right-[60px] z-0">
                            <img src={Vector2} className="w-full" alt="Icon" />
                        </div>
                        <div className="absolute flex items-center justify-center top-[450px] right-[300px] z-0">
                            <img src={mouse} className="w-full" alt="Icon" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[80px] font-bold">For Every Students<br /> Every Classroom.<br />
                            <span className='text-blue-500'>Real results</span>
                        </h1>
                        <p className="py-6">But I explain to you how all this mistaken idea of denouncing pleasure and design pain<br />
                            was born and I will give you a complete lorem ipsum dolor site amet, consectetus adipi<br />
                            scing elit, sed do eiusm</p>
                        <div className='flex items-center justify-start'>
                            <button className="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Get Started
                            </button>
                            <button className="hover:bg-blue-700 rounded-full">
                                <img src={watchVideo} alt="" />
                            </button>
                            <p className='font-bold'>Watch Video</p>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-30 -left-8' style={{ position: 'absolute', zIndex: '2' }}>
                    <img className='' src={Vector1} alt="imgg" />
                </div>
            </div>
        </div>


    );
};

export default Banner;