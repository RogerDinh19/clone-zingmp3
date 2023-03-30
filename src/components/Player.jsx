import React , {useEffect,useState,useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as apis from '../apis';
import icons from '../ultis/icons';
import * as actions from '../redux/action';
import moment from 'moment';
import { toast } from 'react-toastify'
import LoadingSong from './LoadingSong';



const { AiFillHeart, AiOutlineHeart , BsThreeDots, MdSkipNext , MdSkipPrevious , CiRepeat,
        BsPauseFill,BsPlayFill,CiShuffle,TbRepeatOnce, BsMusicNoteList,SlVolume1,SlVolume2,SlVolumeOff
    } = icons
var intervalId         

const Player = ({setIsShowRightSidebar}) => {
    const { curSongId, isPlaying, songs} = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [audio, setAudio] = useState(new Audio())
    const [curSecond, setCurSecond] = useState(0)
    const [isShuffe, setIsShuffe] = useState(false)
    const [repeatMode, setRepeatMode] = useState(0)
    const [isLoadSource, setIsLoadSource] = useState(false)
    const [volume, setVolume] = useState(100)
    const dispatch = useDispatch()
    const thumbRef = useRef()
    const trackRef = useRef()

    useEffect(() => {
        const fetchDetailSong = async() => {
            setIsLoadSource(false)
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
            ])
            setIsLoadSource(true)
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }

            if (res2.data.err === 0) {
                audio.pause()
                setAudio(new Audio(res2.data.data['128']))
            }else{
                audio.pause()
                setAudio(new Audio())
                dispatch(actions.play(false))
                toast.warn('Bài hát này chỉ dành cho Vip')
                setCurSecond(0)
                thumbRef.current.style.cssText = `right: 100%`
            }
        }

        fetchDetailSong()
    }, [curSongId])

    useEffect(() => {
        intervalId && clearInterval(intervalId)
        audio.pause()
        audio.load()
        if (isPlaying && thumbRef.current) {
            audio.play()
            intervalId = setInterval(() => {
                let percent = Math.round(audio.currentTime * 10000 / songInfo.duration) / 100
                thumbRef.current.style.cssText = `right: ${100 - percent}%`
                setCurSecond(Math.round(audio.currentTime))
            }, 200)
        }
    }, [audio])

    useEffect(() => {
        const handleEnded = () => {
            if (isShuffe) {
                handleShuffle()
            } else if (repeatMode) {
                repeatMode === 1 ? handleRepeatOne() : handleNextSong()
            } else {
                audio.pause()
                dispatch(actions.play(false))
            }
        }
        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.removeEventListener('ended', handleEnded)
        }

    }, [audio, isShuffe, repeatMode])

    useEffect(() => {
        audio.volume = volume / 100
    }, [volume])
    

    const handleTogglePlayMusic = async () => {
        if (isPlaying) {
            audio.pause()
            dispatch(actions.play(false))
        }else{
            audio.play()
            dispatch(actions.play(true))
        }
    }

    const handleClickProgressbar  = (e) => {
        const trackRect = trackRef.current.getBoundingClientRect()
        const percent = Math.round((e.clientX - trackRect.left) * 10000 / trackRect.width) / 100
        thumbRef.current.style.cssText = `right: ${100 - percent}%`
        audio.currentTime = percent * songInfo.duration / 100
        setCurSecond(Math.round(percent * songInfo.duration / 100))
    }

    const handleNextSong = () => {
        if (songs) {
            let currentSongIndex
            songs?.forEach((item,index) => {
                if (item.encodeId === curSongId) currentSongIndex = index
            })
            dispatch(actions.setCurSongId(songs[currentSongIndex + 1].encodeId))
            dispatch(actions.play(true))
        }
    }

    const handlePrevSong = () => {
        if (songs) {
            let currentSongIndex
            songs?.forEach((item,index) => {
                if (item.encodeId === curSongId) currentSongIndex = index
            })
            dispatch(actions.setCurSongId(songs[currentSongIndex - 1].encodeId))
            dispatch(actions.play(true))
        }
    }

    const handleRepeatOne = () => {
        audio.play()
    }

    const handleShuffle = () => {
        const randomIndex = Math.round(Math.random() * songs?.length) - 1
        dispatch(actions.setCurSongId(songs[randomIndex].encodeId))
        dispatch(actions.play(true))
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
                    <span 
                        title={`${!isShuffe ? 'Bật phát ngẫu nhiên' : 'Tắt phát ngẫu nhiên'}`}
                        className={`cursor-pointer ${isShuffe ? 'text-purple-600' : 'text-black'}`} 
                        onClick={() => setIsShuffe(prev => !prev)}
                    >
                        <CiShuffle size={24}/>
                    </span>
                    <span className={`${!songs ? 'text-gray-500' : 'cursor-pointer'}`} 
                        onClick={handlePrevSong}
                    >
                        <MdSkipPrevious size={24}/>
                    </span>
                    <span 
                        className='p-1 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'
                        onClick={handleTogglePlayMusic}
                    >   
                        {!isLoadSource ? <LoadingSong/> : isPlaying ? <BsPauseFill size={30}/>  : <BsPlayFill size={30}/> }
                    
                    </span>
                    <span className={`${!songs ? 'text-gray-500' : 'cursor-pointer'}`}>
                        <MdSkipNext 
                            size={24}
                            onClick={handleNextSong}
                        />
                    </span>
                    <span 
                        title='Bật phát lại tất cả' 
                        className={`cursor-pointer ${repeatMode && 'text-purple-600'}`}
                        onClick={() => setRepeatMode(prev => prev === 2 ? 0 : prev + 1)}
                    >
                        { repeatMode === 1 ? <TbRepeatOnce size={24}/> :<CiRepeat size={24}/>}
                    </span>
                </div>

                <div className='w-full flex items-center justify-center gap-3 text-xs'>
                    <div>{moment.utc(curSecond*1000).format('mm:ss')}</div>
                    <div 
                        ref={trackRef}
                        className='w-3/5 h-[3px] cursor-pointer hover:h-[6px] bg-[rgba(0,0,0,0.1)] rounded-l-full  rounded-r-full relative'
                        onClick={handleClickProgressbar}
                    >
                        <div ref={thumbRef} className='absolute top-0 left-0 bottom-0 bg-[#0e8080]  rounded-l-full  rounded-r-full '></div>
                    </div>
                    <div>{moment.utc(songInfo?.duration*1000).format('mm:ss')}</div>
                </div>
            </div>
            <div className='w-[30%] flex-auto flex items-center justify-end gap-4' >

                <div className='flex items-center gap-4'>
                    <span onClick={() => setVolume(prev => +prev===0 ? 50 : 0)}>
                        {+volume >= 50 ? <SlVolume2/> : +volume===0 ? <SlVolumeOff/> : <SlVolume1/>}
                    </span>
                    <input
                        className='cursor-pointer '
                        type="range"
                        step={1}
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                </div>
                
                <span 
                    className='p-2 rounded-md bg-main-500 text-white opacity-90 hover:opacity-100 cursor-pointer'
                    onClick={() => setIsShowRightSidebar(prev => !prev)}
                >
                    <BsMusicNoteList size={16}/>
                </span>
            </div>
        </div>
    )
}

export default Player
