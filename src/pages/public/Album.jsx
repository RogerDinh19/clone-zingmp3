import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import moment from 'moment/moment'

const Album = () => {

    const {title, pid } = useParams()
    const [playListData, setPlayListData] = useState({})

    useEffect(() => {
        const fetchDetailPlayList = async () => {
            const response = await apis.apiGetDetailPlayList(pid)
            if (response?.data.err === 0 ) {
                setPlayListData(response.data?.data)
            }
        }

        fetchDetailPlayList()
    }, [pid])
    

    return (
        <div className='px-[59px] flex w-full gap-5 pt-5'>
            <div className=' flex-none w-1/4 flex flex-col items-center gap-2'>
                <img src={playListData?.thumbnailM} alt=""  className='w-full object-contain rounded-md shadow-md'  />
                <h3 className='text-[20px] font-bold text-[#32323d]'>{playListData?.title}</h3>
                <span 
                    className='text-gray-500 text-xs flex flex-col items-center gap-2'
                >
                    <span>Cập nhập: {moment.unix(playListData?.contentLastUpdate).format('DD/MM/YYYY')}</span> 
                    <span>{playListData?.artistsNames}</span>
                    <span>{`${Math.round(playListData?.like/1000)}K người yêu thích`}</span>
                </span>
            </div>

            <div className='bg-red-500 flex-auto'>
                playlist
            </div>
        </div>
    )
}

export default Album
