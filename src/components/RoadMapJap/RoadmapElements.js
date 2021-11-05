import styled from 'styled-components'


export const RoadmapContainer = styled.div`

`

export const RoadmapWrapper = styled.div`
      display: inline-block;
     vertical-align: middle;
     z-index: 1;
     height: 800px;
     width: 100%;
     max-width: 1100px;
     margin-right: auto;
     margin-left: 27px;

     @media screen and (max-width: 768px){
          height: 600px;
     }
         
`

export const CharImg1 = styled.div`
     width: 100%;
     height: 200px;

     @media screen and (max-width: 768px){
          width: 20%;
          height: 80px;
     }
     
`

export const ImgD = styled.img`
     width: 100%;
     height: 200px;

     @media screen and (max-width: 768px){
          width: 50%;
          height: 90px;
          margin-right:90px;
        
     }
     
     
`
export const ImgS = styled.img`
     width: 100%;
     height: 200px;

     @media screen and (max-width: 768px){
          width: 100%;
          height: 100px;
          
          margin-left:273px;
          margin-right:auto;
     }
     
`

export const CharImg2 = styled.div`
     width: 100%;
     height: 30%;
     padding-top: 180px;
    
`

export const Content = styled.div`
     height: 200px;
     width: 100%;
     max-width: 1100px;
     margin-right: auto;
     margin-left: auto;
     justify-content: center;
     text-align: left;

     @media screen and (max-width: 768px){
          height: 100px;
     width: 100%;
     max-width: 600px;
     justify-content: center;
     text-align: left;
     }

`

export const ContentH1 = styled.h1`
     font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: #F8F5B3;
    font-family: 'NexaBold';

    @media screen and (max-width: 768px){
     font-size: 18px;
     line-height: 1.1;
     font-weight: 600;
     padding-top:20px;
}
`

export const ContentP = styled.p`
     font-size: 22px;
    line-height: 24px;
    color: whitesmoke;
    white-space: pre-line;
    font-family: 'NexaLight';

    @media screen and (max-width: 768px){
     font-size: 12px;
     line-height: 1.1;
     font-weight: 600;

`

export const RoadmapBtnWrapper = styled.div`
    margin-top: 32px;
     display: flex;
     flex-direction: column;
    


`