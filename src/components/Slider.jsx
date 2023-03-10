import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getArrSlider} from '../ultis/fn';
import * as actions from '../redux/action';

const Slider = () => {

    const { banner } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        let min = 0;
        let max = 2;
        const interValId =setInterval(() => {
            const list = getArrSlider(min, max ,sliderEls.length -1 )
            for ( let i = 0; i < sliderEls.length; i++ ) {
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')
                // xóa animation 

                if (list.some(item => item === i) ) {
                    sliderEls[i].style.cssText = `display: block`
                }else {
                    sliderEls[i].style.cssText = `display: none`
                }
                // Nếu item có trong list thì sẽ thêm css display: block và ngược lại
            }

            list.forEach(item => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })
            // Thêm animation vào class 

            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1
            

        }, 3000)
        return () => {
            interValId && clearInterval(interValId);
          };
    }, [])

    const handleClickBanner = (item) => {
        if ( item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId)) 
            dispatch(actions.play(true))
        }
        console.log(item)
    }
    

    return (
        <div className='w-full overflow-hidden px-[59px]'>
            <div className='flex w-full gap-8 pt-8'>
                {banner?.map((item,index) => (
                    <img 
                        key= {item.encodeId}
                        src={item.banner} 
                        alt="" 
                        onClick={() => handleClickBanner(item)}
                        className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? 'block' : 'hidden'}`}
                    />
                ))}
            </div>       
        </div>
    )
}

export default Slider
