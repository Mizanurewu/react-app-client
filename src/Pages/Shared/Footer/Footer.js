import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/home/logo.png'
import apple from '../../../assets/icons/footer/apple.png'
import google from '../../../assets/icons/footer/google.png'
import fb from '../../../assets/icons/footer/fb.png'
import tw from '../../../assets/icons/footer/tw.png'
import li from '../../../assets/icons/footer/li.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#EDEEF3] w-full h-[70px]'>

            </div>
            <footer className="footer p-10 bg-[#132742] text-white">
                <div>
                    <button className='hover:scale-105 transition-transform'><img src={logo} alt="" /></button>
                    <Link className="link link-hover">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br></br> Asperiores a pariatur officiis dele</Link>
                    <button className='hover:scale-105 transition-transform'><img src={apple} alt="" /></button>
                    <button className='hover:scale-105 transition-transform'><img src={google} alt="" /></button>
                    <Link className="link link-hover">Follow us</Link>
                    <div className="grid grid-flow-col gap-4">
                       <button className='hover:scale-105 transition-transform'> <img className='w-[25px] h-[25px]' src={li} alt="" /></button>
                        <button className='hover:scale-105 transition-transform'><img className='w-[25px] h-[25px]' src={tw} alt="" /></button>
                        <button className='hover:scale-105 transition-transform'><img className='w-[25px] h-[25px]' src={fb} alt="" /></button>
                    </div>
                </div>
                <div>
                    <span className=" text-xl font-bold">About Us</span>
                    <Link to='#' className="link link-hover">Our Company</Link>
                    <Link className="link link-hover">Career</Link>
                    <Link className="link link-hover">Invertor Relations</Link>
                    <Link className="link link-hover">Social Impact</Link>
                </div>
                <div>
                    <span className="text-xl font-bold">Resources</span>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Feedback</Link>
                    <Link className="link link-hover">Hello@example.com</Link>

                </div>
                <div>
                    <div className='flex'>
                        <input type="text" placeholder="Email Address" className="input input-bordered rounded-3xl" />
                        <button className="-m-12 px-6 mt-[0px] h-[48px] bg-blue-500 hover:bg-blue-700 text-black  font-bold rounded-full">
                           <span className='text-white'> Started</span>
                        </button>

                    </div>
                    <Link className="link link-hover">Email US</Link>
                    <Link className="link link-hover">Rk.Oama.com</Link>
                    <Link className="link link-hover">Bolmu all right recived 2021</Link>

                </div>
            </footer>
        </div>
    );
};

export default Footer;