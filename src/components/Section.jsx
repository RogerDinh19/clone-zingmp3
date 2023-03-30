import React, {memo} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Section = () => {

    const { artist } = useSelector(state => state.app)
    const navigate = useNavigate()
    
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <h3 className='text-[20px] font-bold'>{artist?.title}</h3>

            <div className='flex items-center justify-between gap-7'>
                {
                    artist && artist?.items?.length > 0 && artist.items.map(item => (
                        <div
                            key={item.encodeId}
                            className='flex flex-col gap-4 flex-auto w-1/5 text-sm cursor-pointer'
                            onClick={() => navigate(item?.link?.split('.')[0])}
                        >
                            <img src={item?.thumbnailM} alt="avater" className='w-full h-auto object-cover rounded-lg ' />
                            <span className=' font-semibold text-gray-400 text-sm'>{item.sortDescription?.slice(0,60)}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default memo(Section)