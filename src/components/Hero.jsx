
import gsap from "gsap"
import { heroVideo,smallHeroVideo } from "../utils"

import { useGSAP } from "@gsap/react"


const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero', {opacity:1, delay:1.5})
  },[])
  return (
  <section className="w-full nav-height bg-black relative">
    <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Iphone 15 pro</p>
        <div className="md:w-10/12 w-9/12">
          <video>
            <source src={videoSrc}  />
          </video>
        </div>
    </div>
  </section>
  )
}

export default Hero
