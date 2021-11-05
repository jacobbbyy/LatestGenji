import styled from 'styled-components'


export const IntroContainer = styled.div`
      color: #000;
      margin-top: 300px;
      @media screen and (max-width: 768px) {
        margin-top: 10px;

      }

    
`

export const IntroWrapper = styled.div`

     display: grid;
     z-index: 1;
     height: 700px;
     width: 100%;
     max-width: 1100px;
     margin-right: 400px;
     margin-left: 400px;
     justify-content: center;

     @media screen and (max-width: 768px) {
        height: 300px;
        width: 1000px;
        margin-right: 20px;
        margin-left: 20px;
        justify-content: initial;
    }

     

`

export const IntroRow = styled.div`
    height: 90%;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 50% 40%;
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        margin-top: 30px;
        height: 50%;

    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        margin-bottom: 7px;
        padding: 0 6px;
        width:100%;

    }

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        margin-bottom: 7px;
        padding: 0 6px;

    }
    
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    text-align: left;

    @media screen and (max-width: 768px) {
        max-width: 600px;
        padding-bottom: 30px;
        
      
  
    }

`

export const IntroH1 = styled.h1`
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #F8F5B3;
    font-family: 'NexaBold';
    white-space: pre-line;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const IntroP = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: whitesmoke;
    white-space: pre-line;
    font-family: 'NexaLight';

    @media screen and (max-width: 768px) {
        font-size: 15px;
        margin-bottom: 15px;
        line-height: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
` 

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        max-width: 222px;
        margin-bottom: 40px;
    }
    

`

export const Img = styled.img`
      width: 80%;
      margin: 0 0 10px 0;
      padding-right: 0;
      padding-top: 60px;

      @media screen and (max-width: 768px) {
        margin: 0 0 5px 0;
        padding-right: 0;
        padding-top: 30px;
    }
`

export const DotContainer = styled.div`
    width: 200px;
    margin-top: 50px;
    margin-right: 100px;
    margin-left: 100px;
    position: absolute;

    @media screen and (max-width: 768px) {
    visibility: hidden;
      
    }
    
`

export const IntroJap = styled.div`
    width: 200px;
    margin-top: 100px;
    margin-left: 1600px;
    margin-bottom: 0px;
    position: absolute;
    float: right;

    @media screen and (max-width: 768px) {
        visibility: hidden;
      
    }
`


export const IndiDiv = styled.div`
   width: 50%;
   position: absolute;
   padding-top: 600px;
   margin-left: 12px;
   text-align: left;

   @media screen and (max-width: 768px) {

    visibility: hidden;
    
    padding-top: 285px;
    margin-left: 6px;
   

  
}

`

export const IndiP = styled.p`
     max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: whitesmoke;
    white-space: pre-line;
    font-family: 'NexaLight';

    @media screen and (max-width: 768px) {
        font-size: 13px;
        margin-bottom: 13px;
        line-height: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
