import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import moment from 'moment/moment'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ListsSong, AudioLoading } from '../../components'
import { useDispatch , useSelector} from 'react-redux';
import * as actions from '../../redux/action'
import icons from '../../ultis/icons';

const { BsPlayFill } = icons


const Album = () => {

    const {title, pid } = useParams()
    const { isPlaying} = useSelector(state => state.music)
    const [playListData, setPlayListData] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDetailPlayList = async () => {
            dispatch(actions.loading(true))
            const response = await apis.apiGetDetailPlayList(pid)
            dispatch(actions.loading(false))
            if (response?.data.err === 0 ) {
                setPlayListData(response.data?.data)
                dispatch(actions.setPlaylist(response?.data?.data?.song?.items))
            }
        }

        fetchDetailPlayList()
    }, [pid])
    

    return (
        <div className='px-[59px] flex w-full h-full gap-5 pt-5'>
                <div className=' flex-none w-1/4 flex flex-col items-center gap-2 sticky top-9'>
                    <div className='w-full relative overflow-hidden'>
                        <img 
                            src={playListData?.thumbnailM} 
                            alt=""  
                            className={`w-full object-contain ${isPlaying ? 'rounded-full animate-rotate-center' : 'rounded-md '} shadow-md `} />

                        <div className={`absolute top-0 left-0 bottom-0 right-0 hover:bg-overlay-30 ${isPlaying ? 'hover:rounded-full' : ''} text-white flex justify-center items-center`}>
                            <span className='p-3 border border-white rounded-full'>
                                {isPlaying ? <AudioLoading/> : <BsPlayFill size={30}/> }                                     
                            </span> 
                        </div>
                    </div>
                    <h3 className='text-[20px] font-bold text-[#32323d]'>{playListData?.title}</h3>
                    <span 
                        className='text-gray-500 text-xs flex flex-col items-center gap-2'
                    >
                        <span>Cập nhập: {moment.unix(playListData?.contentLastUpdate).format('DD/MM/YYYY')}</span> 
                        <span>{playListData?.artistsNames}</span>
                        <span>{`${Math.round(playListData?.like/1000)}K người yêu thích`}</span>
                    </span>
                </div>
                <Scrollbars style={{ width: '100%', height: '90%' }}>
                    <div className=' flex-auto'>
                            <span className='text-sm'>
                                <span className='text-gray-600'>Lời tựa </span>
                                <span>{playListData?.sortDescription}</span>
                            </span>
                            <div >
                                <ListsSong  totalDuration={playListData?.song?.totalDuration} />
                            </div>
                    </div>
                </Scrollbars>
                
        </div> 
        
        
        
    )
}

export default Album
