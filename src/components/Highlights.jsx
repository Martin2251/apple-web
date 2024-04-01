import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { watchImg,rightImg } from "../utils"

const Highlights = () => {

  useGSAP(() =>{
    gsap.to('#title', {opacity:1,y:0})
    gsap.to('.link',{opacity:1, y:0})
  })
  return (
<section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
  <div className="screen-max-width">
    <div className="mb-12 w-full items-end justify-between">
      <h1 id="title" className="section-heading">get the highlights</h1>
      <div className="flex flex-wrap items-end gap-5">
        <p className="link"> watch the film
        <img src={watchImg} alt="watch" className="m-l-2"  />
        </p>
        <p className="link"> watch the event
        <img src={rightImg} alt="right" className="m-l-2"  />
        </p>
      </div>
    </div>
  </div>

</section>
  )
}

export default Highlights
