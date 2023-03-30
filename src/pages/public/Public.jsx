import React , {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player, Header } from '../../components';

const Public = () => {

    const [isShowRightSidebar, setIsShowRightSidebar] = useState(true)
    return (
        <div className='w-full h-screen flex flex-col bg-main-300 relative pb-[90px]'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] min-h-full flex-none '>
                    <SidebarLeft/>
                </div>

                <div className='flex-auto '>
                    <div className='h-[70px] px-[59px] flex items-center'>
                        <Header/>
                    </div>
                    <Outlet/>
                </div>

                {
                    isShowRightSidebar && <div className='w-[330px] hidden desktop:flex flex-none animate-slide-left'>
                            <SidebarRight/>
                    </div>
                }
                
            </div>

            <div className='h-[90px] flex-none fixed bottom-0 left-0 right-0'>
                <Player setIsShowRightSidebar={setIsShowRightSidebar} />
            </div>
            
        </div>
    )
}

export default Public
