import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-light.svg';
import { sidebarMenu } from '../ultis/menu';
import { useNavigate } from 'react-router-dom';
import path from '../ultis/path';

const SideBarLeft = () => {

    const navigate = useNavigate()
    const notActiveStyle = 'text-[#32323D] py-2 px-[25px] font-bold flex items-center gap-3 text-[13px] hover:text-[#8d22c3]'
    const activeStyle = 'text-[#8d22c3] py-2 px-[25px] font-bold flex items-center gap-3 text-[13px]  bg-[rgba(0,0,0,0.05)] border-l-[#8d22c3] border-l-2 border-solid' 

    return (
        <div className='flex min-h-full flex-col bg-main-200 '>
            <div 
                className='w-full h-[70px] py-[15px] px-[25px] items-center justify-start cursor-pointer'
                onClick={() => navigate(path.HOME)}
            >
                <img src={logo} className='w-[120px] h-[40px] ' alt='Logo'/>
            </div>

            <div className='flex flex-col'>
                {sidebarMenu.map(item => (
                    <NavLink 
                    to={item.path}
                    key={item.title}
                    className={({isActive}) => isActive ? activeStyle :  notActiveStyle} 
                    >
                            {item.icon}                    
                        <span >
                            {item.title}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SideBarLeft
