import icons from "./icons"

const {
    MdOutlineLibraryMusic,
    TbChartDots3,
    RiCompassDiscoverFill,
    MdRadio,
    RiChatFollowUpLine} = icons

export const sidebarMenu = [
    {
        path:'mymusic',
        title: 'Cá Nhân',
        icon: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path:'',
        title: 'Khám Phá',
        icon: <RiCompassDiscoverFill size={24}/>
    },
    {
        path:'zing-chart',
        title: '#zingchart',
        icon: <TbChartDots3 size={24}/>
    },
    {
        path:'radio',
        title: 'Radio',
        icon: <MdRadio size={24}/>
    },
    {
        path:'follow',
        title: 'Theo Dõi',
        icon: <RiChatFollowUpLine size={24}/>
    },

]