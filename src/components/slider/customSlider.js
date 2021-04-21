import React,{useState} from 'react';
import Slider from 'react-animated-slider';
import './slider.styles.scss'
import './sliderAnimation.styles.scss'    
import "normalize.css/normalize.css";
import "react-animated-slider/build/horizontal.css"

const HeroSlider =()=>
{
const [images,setImages]= useState([
    {   image:'/sliderImages/slider-1.jpg',
        title:"2020",
        description:'SALE UPTO 40% OFF'

    },
    {   image:'/sliderImages/slider-2.jpg',
        title:"2020",
        description:'SALE UPTO 40% OFF'
    },


    {       image:'/sliderImages/slider-3.jpg',
            title:"2020",
            description:'SALE UPTO 40% OFF'
    }]

)


return(
    <div>
    <Slider className="slider-wrapper" >
    {images.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button>{item.description}</button>
        </div>

      </div>
    ))}
  </Slider>
</div>
)

}
export default HeroSlider;
