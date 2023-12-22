import { useEffect,  useRef, } from "react"

import ListSlider from "../../App/img/silder/ListSlider"
import './Slider.css'
function Slider(){

    const items = useRef()
    const intervel = useRef();
    const sliderMain = useRef()
    const handleSilder = (value) => {
        const sliderFirst = document.querySelector('.slider-item.index0')
        const sliderSecond = document.querySelector('.slider-item.index1')
        const sliderThirst = document.querySelector('.slider-item.index2')
        const sliderFouth = document.querySelector('.slider-item.index3')
        const sliderFive = document.querySelector('.slider-item.index4')
        const sliderSix = document.querySelector('.slider-item.index5')
        const sliderSeven = document.querySelector('.slider-item.index6')
        const sliderEight = document.querySelector('.slider-item.index7')



        if(value === 1){
            sliderFirst.classList.replace('index0', 'index7')
            sliderSecond.classList.replace('index1', 'index0')
            sliderThirst.classList.replace('index2', 'index1')
            sliderFouth.classList.replace('index3', 'index2')
            sliderFive.classList.replace('index4', 'index3')
            sliderSix.classList.replace('index5', 'index4')
            sliderSeven.classList.replace('index6', 'index5')
            sliderEight.classList.replace('index7', 'index6')
        }else if(value === -1){
            sliderFirst.classList.replace('index0', 'index1')
            sliderSecond.classList.replace('index1', 'index2')
            sliderThirst.classList.replace('index2', 'index3')
            sliderFouth.classList.replace('index3', 'index4')
            sliderFive.classList.replace('index4', 'index5')
            sliderSix.classList.replace('index5', 'index6')
            sliderSeven.classList.replace('index6', 'index7')
            sliderEight.classList.replace('index7', 'index0')
        }

        
    }
    useEffect(() => {
        

       

        intervel.current = setInterval(() => {handleSilder(1)}, 4000)

        

        return () => {
            clearInterval(intervel.current)

            
            
        }

    }, [])
    return (
        <div className="slider">
            <div className="slider-wrap">
                <div onClick={() => {handleSilder(-1)}} className="btn-slider btn-prev">
                    <i className="bi bi-chevron-left"></i>
                </div>
                <div onClick={() => {handleSilder(1)}} className="btn-slider btn-next">
                    <i className="bi bi-chevron-right"></i>
                </div>
                <div ref={sliderMain} className="slider-main">
                    {ListSlider.map((value, key) => {
                      
                    return  (
                        <div ref={items} key={key} className= {`slider-item index${key}`}>
                            <img className='slider-img' src={value.src} alt="" />
                        </div>
                    )})}
                    
                </div>
            </div>
        </div>
    )
   
}
export default Slider