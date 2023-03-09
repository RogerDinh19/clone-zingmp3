import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player } from '../../components';

const Public = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-main-300'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] h-full flex-none'>
                    <SidebarLeft/>
                </div>

                <div className='flex-auto'>
                    <Outlet/>
                </div>

                <div className='w-[330px] hidden desktop:flex flex-none animate-slide-left'>
                    <SidebarRight/>
                </div>
            </div>

            <div className='h-[90px] flex-none'>
                <Player/>
            </div>
            
        </div>
    )
}

export default Public
