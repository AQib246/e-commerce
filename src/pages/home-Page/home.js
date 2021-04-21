import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/MainDirectory';
import HeroSlider from '../../components/slider/customSlider';
import FeaturedSection from '../../components/featured-section/featuredSection';



const Home = ()=>(
<>
    <HeroSlider/> 

    <FeaturedSection/>

    <div className="homepage">
         <Directory/>   
    </div>
</>
)
export default Home