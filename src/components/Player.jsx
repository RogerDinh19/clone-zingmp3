import React , {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import * as apis from '../apis';
import icons from '../ultis/icons';

const { AiFillHeart, AiOutlineHeart , BsThreeDots, MdSkipNext , MdSkipPrevious , CiRepeat,
        BsPauseFill,BsPlayFill,CiShuffle
    } = icons


const Player = () => {

    const audioEl = new Audio()
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)

    useEffect(() => {
        const fetchDetailSong = async() => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
            ])

            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }

            if (res2.data.err === 0) {
                setSource(res2.data.data['128'])
            }
        }

        fetchDetailSong()
    }, [curSongId])

    const handleTogglePlayMusic = () => {
        
    }
    
    return (
        <div className='bg-main-400 h-full px-5 flex py-2'>
            <div className='w-[30%] flex-auto flex items-center gap-3'>
                <img src={songInfo?.thumbnail} alt=""  className='w-16 h-16 object-cover rounded-md'/>
                <div className='flex flex-col '>
                    <span className='font-semibold text-gray-700 text-sm'>{songInfo?.title}</span>
                    <span className='text-xs text-gray-500'>{songInfo?.artistsNames}</span>
                </div>
                <div className='flex gap-4 pl-2'>
                    <span>
                        <AiOutlineHeart size={16}/>
                    </span>
                    <span>
                        <BsThreeDots size={16}/> 
                    </span>
                </div>
            </div>
            <div className='w-[40%] flex flex-col flex-auto items-center justify-center gap-2'>
                <div className='flex gap-8 justify-center items-center'>
                    <span title='Bật phát ngẫu nhiên' className='cursor-pointer'>
                        <CiShuffle size={24}/>
                    </span>
                    <span className='cursor-pointer'>
                        <MdSkipPrevious size={24}/>
                    </span>
                    <span 
                        className='p-1 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'
                        onClick={handleTogglePlayMusic}
                    >
                        {isPlaying ? <BsPauseFill size={30}/>  : <BsPlayFill size={30}/> }
                    </span>
                    <span className='cursor-pointer'>
                        <MdSkipNext size={24}/>
                    </span>
                    <span title='Bật phát lại tất cả' className='cursor-pointer'>
                        <CiRepeat size={24}/>
                    </span>
                </div>

                <div>
                    prosbar
                </div>
            </div>
            <div className='w-[30%] flex-auto' >
                volume
            </div>
        </div>
    )
}

export default Player
