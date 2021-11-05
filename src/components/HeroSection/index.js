

import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroCountdown,
    HeroH1,
    CountdownWrapper,
    HeroJap,
    HeroDate,
    HeroP
} from './HeroElements'

import { useState, useEffect } from "react";
import Genji from '../../assets/genji.jpg'
import Countdown from 'react-countdown'
import JapHero from '../../assets/japhero.png'




const HeroSection = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date(`12/30/2021`) - +new Date();
        let timeLeft = {};
    
        if (difference >= 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
        console.log(timeLeft);
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

    return ( 
        <HeroContainer>
            <HeroBg>
                <ImageBg alt="Background image" src={Genji}></ImageBg>
            </HeroBg>
            <HeroContent>
                <HeroJap>
                 
                </HeroJap>
            
                <HeroCountdown>
                    <HeroH1>Countdown:</HeroH1>
                    <CountdownWrapper>
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                    </CountdownWrapper>
                   
                </HeroCountdown>
            </HeroContent>
        </HeroContainer>
     );
}
 
export default HeroSection;