"use client"
import Hero from "./hero/Hero"
import Feature from './feature/Feature'
import PopularBurger from "./popularBurger/PopularBurger"
import Delivery from "./delivery/Delivery"
import Team from "./team/Team"
import Reservation from "./reservation/Reservation"
import NewsLetter from "./newsLetter/NewsLetter"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react"

const Home = () => {
  useEffect(()=>{
   
    const initAos = async () =>{
      await import('aos')
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:'top-center'
      })
    };
    initAos()
  },[])
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <NewsLetter />
    </div>
  )
}

export default Home
