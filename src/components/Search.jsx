import React from 'react';
import icons from '../ultis/icons';

const { CiSearch } = icons

const Search = () => {
    return (
        <div className='w-full flex pl-2 items-center bg-[#e6e6e6] rounded-[20px] '>
            <button>
                <CiSearch size={24}/>
            </button>

            <input 
            type="text" 
            className='w-full outline-none bg-[#e6e6e6] rounded-r-[20px]  px-2 py-2 h-10 '
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            />
        </div>
    )
}

export default Search
