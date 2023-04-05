import React from 'react';
import { Slider, Section } from '../../components';
import { useSelector } from 'react-redux'

const Home = () => {
    const { artist, theHappyWeekend, chill } = useSelector(state => state.app)
    return (
        <div className='overflow-y-auto'>
            <div className=''>
                <Slider/>
            </div>
            <div>
                <Section data={chill}/>
                <Section data={artist}/>
                <Section data={theHappyWeekend}/>
                <div className='w-full h-[500px]'></div>
            </div>
        </div>
    )
}

export default Home
