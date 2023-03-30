import React from 'react';
import { Slider, Section } from '../../components';

const Home = () => {

    return (
        <div className='overflow-y-auto'>
            <div className=''>
                <Slider/>
            </div>
            <div>
                <Section/>
            </div>
        </div>
    )
}

export default Home
