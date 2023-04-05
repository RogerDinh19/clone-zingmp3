import React, { memo } from 'react'
import { ThreeCircles } from  'react-loader-spinner'



const Loading = () => {
    return (
        <ThreeCircles
            height="70"
            width="70"
            color="#63d9e0"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
        />
    )
}

export default memo(Loading)