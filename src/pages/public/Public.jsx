import React , {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player, Header, Loading } from '../../components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSelector } from 'react-redux';

const Public = () => {

    const [isShowRightSidebar, setIsShowRightSidebar] = useState(true)
    const { isLoading } = useSelector(state => state.app)
    return (
        <div className='w-full h-screen flex flex-col bg-main-300 relative pb-[90px]'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] min-h-full flex-none '>
                    <SidebarLeft/>
                </div>

                <div className='flex-auto relative'>

                    {isLoading && <div className='absolute top-0 bottom-0 right-0 left-0 bg-main-100 z-50 items-center justify-center flex'>
                        <Loading/>
                    </div> }
                                        
                    <div className='h-[70px] px-[59px] flex items-center'>
                        <Header/>
                    </div>
                    <Scrollbars style={{ width: '100%', height: '100%' }}>
                        <Outlet/>
                    </Scrollbars>
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
