import React ,{useEffect} from 'react'
import './Hero.css'
import AOS from "aos";
import "aos/dist/aos.css"; // Импорт стилей AOS

const Hero = () => {
    useEffect(() => {

        AOS.init({
          duration: 1000, // Длительность анимации в миллисекундах
          once: true,     // Анимация срабатывает только один раз при скролле
        });
      }, []);
    
  return (
  <>
  <section>
    <div className="container">
        <div className="hero__wrap">
<div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="200" className="hero__box"></div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="400" className="hero__box"></div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="600" className="hero__box"></div>
        </div>
        <div className="hero__wrap">
<div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="200" className="hero__box"></div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="400" className="hero__box"></div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="600" className="hero__box"></div>
        </div>
        <div className="hero__wrap">
<div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="200" className="hero__box"></div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="400" className="hero__box"></div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="600" className="hero__box"></div>
        </div>
    </div>
  </section>
  </>
  )
}

export default Hero