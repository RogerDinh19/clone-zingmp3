import React, { memo } from 'react'
import {ListItem} from './'
import icons from '../ultis/icons'
import moment from 'moment'

const {BsDot} = icons

const ListsSong = ({songs,totalDuration}) => {

    // console.log({songs,totalDuration})
    return (
        <div className='w-full flex flex-col text-gray-600'>
            <div className='flex justify-between items-center text-xs uppercase p-[10px] font-semibold'>
                <span>Bài hát</span>
                <span>Album</span>
                <span>Thời gian</span>
            </div>

            <div className='flex flex-col'>
                {songs?.map(item => (
                    <ListItem key={item.encodeId} songData={item}/>
                ))}
            </div>
            <span className='flex items-center gap-1 py-[10px] border-t border-[rgba(0,0,0,0.05)]'>
                <span>{`${songs?.length} bài hát`}</span>
                <BsDot size={24}/>
                <span>{moment.utc(totalDuration*1000).format('HH:mm:ss')}</span>
            </span>
        </div>
    )
}

export default memo(ListsSong)
