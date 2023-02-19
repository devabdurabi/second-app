import React from "react"
import heroVid from "../assets/video.mp4"

const Hero = () => {
  return (
    <section className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />

      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-white text-2xl">Vader van Dalia</h1>
        <h1 className="text-white text-4xl font-bold">Discover the World</h1>
        <p className="text-xl py-4">In deze pagina wil ik leuke dingen delen over mijn leven, sport routines en nog veel meer. Volg mijn journey: een werkende vader</p>
        <div>
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-5 py-3 px-7 rounded-3xl">Check Nu</button>
            <button className="border ml-5 py-3 px-7 rounded-3xl">Meer info</button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-bold text-1xl font-bold">Preparing my child for the Future.</p>
      </div>
    </section>
  )
}

export default Hero
