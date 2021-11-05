


import styled from 'styled-components'

export const SliderContainer = styled.div`
   color: #000;
`

export const SliderWrapper = styled.div`
     display: inline-block;
     vertical-align: middle;
     z-index: 1;
     height: 1000px;
     width: 100%;
     max-width: 1100px;
     margin-right: auto;
     margin-left: auto;
     margin-top: 100px;

     @media screen and (max-width: 768px){
     
     height: 500px;
     max-width: 750px;
     margin-top: 20px;

     }
         
`

export const CloudStrikeImg = styled.div`
     margin-left: 200px;
     height: 30%;
     padding-bottom: 100px;

     @media screen and (max-width: 768px){
     height: 20%;
     padding-bottom: 90px;
     }
     

`
export const Img = styled.img`
     width: 720px;
     @media screen and (max-width: 768px){
     width: 350px;

     }
`


export const DotXImg = styled.div`
      width: 100%;
     height: 30%;
     margin-top: 100px;

     @media screen and (max-width: 768px){
      width: 100%;
     height: 10%;
     margin-top: 50px;
     }

`

export const ImgX = styled.img`
     width: 600px;

     @media screen and (max-width: 768px){
     width: 300px;

     }
`