import React, {memo} from 'react'
import { useNavigate } from 'react-router-dom';

const Section = ({data}) => {
    const navigate = useNavigate()
    const limitedData = data?.items?.slice(0, 5);
    
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <h3 className='text-[20px] font-bold'>{data?.title}</h3>

            <div className='flex items-center justify-between gap-7'>
                {
                    limitedData && limitedData?.length > 0 && limitedData?.map(item => (
                        <div
                            key={item.encodeId}
                            className='flex flex-col gap-4 flex-auto w-1/5 text-sm cursor-pointer'
                            onClick={() => navigate(item?.link?.split('.')[0])}
                        >
                            <img src={item?.thumbnailM} alt="avatar" className='w-full h-auto object-cover rounded-lg ' />
                            <span className=' font-semibold text-gray-400 text-sm h-[40px]'>{item.sortDescription?.length >= 40 ? `${item.sortDescription?.slice(0,60)}...` : item.sortDescription } </span>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default memo(Section)