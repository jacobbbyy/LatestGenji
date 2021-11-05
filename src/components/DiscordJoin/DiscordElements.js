import styled from 'styled-components'

export const DiscordContainer = styled.div`
     background: transparent;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 30px;
     height: 700px;
     position: relative;
     z-index: 1;
     margin-top: 200px;

     @media screen and (max-width: 768px){
          padding: 0 15px;
          height: 260px;
          margin-top: 300px;
     }
`

export const DiscordBg = styled.div`
     position: absolute;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 100%;
     overflow: hidden;

    
`

export const DiscordImg = styled.img`
     width: 100%;
     height: 100%;
     --o-object-fit: cover;
     object-fit: contain;

`

export const DiscordContent = styled.div`
      z-index: 3;
     max-width: 1000px;
     position: absolute;
     display: flex;
     flex-direction: column;
     text-align: left;
     margin-right: 120px;
     margin-bottom: 200px;

     @media screen and (max-width: 768px){
          max-width: 500px;
     margin-right: 60px;
     margin-bottom: 100px;
     }

`

export const DiscordH1 = styled.h1`
     color: #000;
     font-size: 38px;
     padding-bottom: 5px;
     font-family: 'NexaBold';

     @media screen and (max-width: 768px){
          font-size: 19px;
          padding-bottom: 2px;
     }
`

export const DiscordP = styled.p`
     
     color: #000;
     font-size: 24px;
     margin: 0;
     white-space: pre-line;
     font-family: 'NexaLight';

     @media screen and (max-width: 768px){
          font-size: 12px;
          padding-bottom: 2px;
     }
     

`

export const DiscordBtnWrapper = styled.div`
     margin-top: 32px;
     display: flex;
     flex-direction: column;
    text-align: left;
`