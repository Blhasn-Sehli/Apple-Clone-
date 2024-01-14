import React, { useState } from 'react'
import AppleLogo from "../assets/apple.svg"
import Search from "../assets/search.svg"
import Bag from "../assets/Back.svg"
import Hamburger from "../assets/hamburger.svg"
import Ximage from "../assets/X-48.png"
const Navbar = () => {
    const [show, setShow] = useState(false)
    if (!show) {
        return (
            <div className='flex items-center lg:justify-center justify-between gap-8 w-100 h-11 px-5 bg-appleNavColor  '>
                <img src={AppleLogo} alt="Apple Logo" />
                <ul className='lg:flex justify-between  gap-6 text-white text-sm  hidden '>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>Vision</li>
                    <li>AirPods</li>
                    <li>Tv & Home</li>
                    <li>Entertainement</li>
                    <li>Accessories</li>
                    <li>Support</li>
                </ul>
                <div className='flex gap-8'>
                    <img src={Search} alt='Search Logo' />
                    <img src={Bag} alt='Bag Logo' />
                    <img src={Hamburger} onClick={() => setShow(true)} className='lg:hidden ' alt='burgor Logo' />
                </div>
            </div>
        )
    } else {
        return (
            <div className="list-none bg-171616 h-screen" >
                <div onClick={() => setShow(false)} className='flex justify-end  items-center text-xl text-white  p-4'  >
                    <img src={Ximage} alt='X Logo' width={20} height={15} />
                </div>
                <div className='text-white text-3xl  flex flex-col gap-4 p-10 font-bold hover:cursor-pointer'>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>Vision</li>
                    <li>AirPods</li>
                    <li>Tv & Home</li>
                    <li>Entertainement</li>
                    <li>Accessories</li>
                    <li>Support</li>
                </div>
            </div>
        )
    }
}

export default Navbar