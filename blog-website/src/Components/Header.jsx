import React, { useState } from 'react';
import { MdOutlineContactSupport } from "react-icons/md";
import logo from './../assets/Images/logo.jpg';
import { useNavigate } from 'react-router-dom';
import Spinner from './../Components/Spinner';

function Header() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleNavigation = (path) => {
        setLoading(true);
        setTimeout(() => {
            navigate(path);
            setLoading(false);
        }, 3000); // 3 seconds delay
    };

    return (
        <div>
            {loading && <Spinner />}
            <div className='flex justify-between items-center p-4'>
                <img 
                    src={logo} 
                    className='w-[150px] cursor-pointer' 
                    onClick={() => handleNavigation('/')} 
                    alt="Logo"
                />
                <ul className='flex gap-4 md:gap-14'>
                    <li 
                        className='hover:font-bold cursor-pointer' 
                        onClick={() => handleNavigation('/')}
                    >
                        Home
                    </li>
                    <li className='hover:font-bold cursor-pointer' 
                   onClick={() => handleNavigation('about-us')} >About Us</li>
                    <li 
                        className='hover:font-bold cursor-pointer' 
                        onClick={() => handleNavigation('/contact-us')}
                    >
                        Contact Us
                    </li>
                </ul>
                <button 
                    className='bg-red-500 rounded-full text-white flex items-center 
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' 
                    onClick={() => handleNavigation('/contact-us')}
                >
                    <MdOutlineContactSupport className='mr-1 text-[20px]' />Help
                </button>
            </div>
        </div>
    );
}

export default Header;
