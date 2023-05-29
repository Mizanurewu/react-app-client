import React from 'react';
import aboutBanner2 from '../../../assets/icons/about/aboutBanner2.png'

const AboutBanner2 = () => {
    return (
        <div className="hero min-h-screen p-20 relative">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={aboutBanner2} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h4 className='text-xl text-blue-500 font-bold'>Our Missoon</h4>
                    <h1 className="text-5xl font-bold">Build Better For Best<br></br> Economy</h1>
                    <p className="p-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.ovident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.<br></br><br></br>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.ovident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="me-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Join Our Teem
                    </button>
                </div>
                <div className='flex flex-col justify-center absolute h-[100px] bg-white w-[200px] rounded-xl bottom-[130px] right-[400px]'>
                    <h4 className='font-bold text-xl text-center'> MST Aloner Ion</h4>
                    <h6 className='text-xl text-center text-blue-500'>CEO Education</h6>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner2;