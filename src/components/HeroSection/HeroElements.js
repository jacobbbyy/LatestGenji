import styled from 'styled-components'


export const HeroContainer = styled.div`
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      height: 800px;
      position: relative;
      z-index: 1;

      
     @media screen and (max-width: 768px) {
        height: 500px;
    }

`

export const HeroBg = styled.div`
     position: absolute;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 100%;
     overflow: hidden;
     margin-top: 50px;


`

export const ImageBg = styled.img`
     width: 80%;
     height: 800px;

     @media screen and (max-width: 768px) {
        width: 80%;
        height: 400px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`
export const HeroContent = styled.div`
     z-index: 3;
     max-width: 1200px;
     position: absolute;
     padding: 8px 24px;
     display: flex;
     flex-direction: column;
     align-items: center;

`


export const HeroCountdown = styled.div`
      width: 700px;
      background-color: #fff;
      border-radius: 90px;
      margin-top: 950px;
      flex-direction: column;
      display: flex;
      align-items: center;
      font-size: 20px;
      padding-bottom: 10px;

      @media screen and (max-width: 768px) {
        width: 350px;
        border-radius: 50px;
        margin-top: 200px;
        padding-bottom: 5px;
        visibility: hidden;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

      

`

export const HeroH1 = styled.h1`
    color: #000;
    font: 10px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const CountdownWrapper = styled.div`
    font-size: 32px;
`

export const HeroJap = styled.div`
    width: 200px;
    margin-top: 300px;
    margin-right: 1600px;
    position: absolute;
    float: left;
`

export const HeroDate = styled.div`
    width: 200px;
    margin-top: 400px;
    margin-left: 1200px;
    position: absolute;
    float: right;
`

export const HeroP = styled.p`
    color: #F8F5B3;
    font-size: 35px;
    text-align: center;
    margin: 12px;
    font-family: 'NexaBold';
`