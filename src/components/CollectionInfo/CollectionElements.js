import styled from 'styled-components'


export const CollectionContainer = styled.div`
     color: #000;
    
`

export const CollectionWrapper = styled.div`
     
     display: grid;
     z-index: 1;
     height: 700px;
     width: 70%;
     max-width: 1100px;
     margin-right: 300px;
     margin-left: 300px;
     padding: 0 24px;
     justify-content: center;

     @media screen and (max-width: 768px){
        height: 400px;
        width: 100%;
        margin-right: 0px;
        margin-left: 0px;
        padding: 0 12px;
     }
`

export const CollectionRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';
`

export const Column1 = styled.div`
    margin-top: 40px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px){
        margin-top: 20px;
    margin-bottom: 7px;
    padding: 0 7px;
    grid-area: col1;
    }

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px){
        margin-bottom: 7px;
        padding: 0 7px;
    }
    
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 20;
    padding-bottom: 60px;
    text-align: left;
    margin-left: 10px;

    @media screen and (max-width: 768px){
        max-width: 700px;
        padding-top: 10;
        padding-bottom: 30px;
        text-align: left;
        margin-left: 5px;



    }

`

export const CollectionH1 = styled.h1`
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: #F8F5B3;

    
    @media screen and (max-width: 768px){
        margin-bottom: 12px;
    font-size: 20px;
  
   
        }
`

export const CollectionP = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: antiquewhite;
    white-space: pre-line;

    @media screen and (max-width: 768px){
        max-width: 220px;
        margin-bottom: 10px;
        font-size: 15px;
        line-height: 15px;

   
        }
`

export const ImgWrap = styled.div`
    max-width: 555px;
      height: 100%;

      @media screen and (max-width: 768px){
        max-width: 277px;
       
      }

`

export const Img = styled.img`
      width: 70%;
      height: 100%;
      margin: 0 0 10px 0;
      padding-right: 0;

      @media screen and (max-width: 768px){
        width: 75%;
        height: 100%;
    
      margin: 0 0 5px 0;
       
      }
`
