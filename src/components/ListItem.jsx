import React, {memo} from 'react'
import icons from '../ultis/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import * as actions from '../redux/action'



const { IoMusicalNotesOutline } = icons

const ListItem = ({songData}) => {

    const dispatch = useDispatch()

    return (
        <div 
        className='flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer' 
        onClick={() => {
            dispatch(actions.setCurSongId(songData?.encodeId))
            dispatch(actions.play(true))
            dispatch(actions.playAlbum(true))

        }}
        >
            <div className='flex items-center flex-1 gap-2'>
                <span><IoMusicalNotesOutline/></span>
                <img src={songData?.thumbnail} alt=""  className='w-10 h-10 object-cover rounded-md ' />
                <span className='flex flex-col w-full'>
                    <span className='text-sm font-semibold'>{songData?.title.length > 30 ? `${songData?.title.slice(0, 30)}...` : songData?.title }</span>
                    <span className='text-xs'>{songData?.artistsNames}</span>
                </span>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <span className='text-xs'>{songData?.album?.title.length > 30 ? `${songData?.album?.title.slice(0, 30)}...` : songData?.album?.title }</span>
            </div>
            <div className='flex-1 flex justify-end'>
                {moment.utc(songData?.duration*1000).format('mm:ss')}
            </div>
        </div>
    )
}

// su dung memo de tranh vien rerender
export default memo(ListItem)
