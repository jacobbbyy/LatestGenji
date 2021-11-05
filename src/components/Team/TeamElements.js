import styled from 'styled-components'


export const TeamContainer = styled.div`
     color: #000;
     margin-top: 100px;
     padding-bottom: 300px;

     @media screen and (max-width: 768px){
        margin-top: 0px;
        padding-bottom: 150px;
     }
`

export const TeamWrapper = styled.div`
 
     display: grid;
     z-index: 1;
     height: 500px;
     width: 100%;
     max-width: 1100px;
     margin-right: auto;
     margin-left: auto;
     padding: 0 24px;
     justify-content: center;

     @media screen and (max-width: 768px){
     height: 250px;
     width: 90%;
     padding: 0 12px;
     
     }
`
export const TextWrapper = styled.div`
    margin: 0;
    height: 2px;
`


export const TeamH1 = styled.h1`
    margin-bottom: 10px;
    height: 20px;
    font-size: 25px;
    font-weight: 600;
    color: antiquewhite;
`

export const TeamH2 = styled.h2`
    margin-bottom: 10px;
    height: 20px;
    font-size: 18px;
    font-weight: 600;
    color: antiquewhite;
`

export const TeamRow = styled.div`
    
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3';

`

export const Column1 = styled.div`
      margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

`
export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;

`

export const ImgWrap = styled.div`
    max-width: 555px;
      height: 100%;

`

export const Img = styled.img`
      width: 100%;
      margin: 0 0 10px 0;
      padding-right: 0;
`

