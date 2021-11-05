import styled from 'styled-components'


export const FooterContainer = styled.div`
    background-color: transparent;

`

export const FooterWrapper = styled.div`
    display: grid;
     z-index: 1;
    height: 400px;
    width: 100%;
     max-width: 1100px;
     margin-right: auto;
     margin-left: auto;
     padding: 0 24px;
     justify-content: center;
     padding-left: 100px;

`

export const FooterRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
`

export const FooterP = styled.p`
    max-width: 440px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
`

export const FooterTagLine = styled.p`
    max-width: 500px;
    font-size: 22px;
    line-height: 24px;
    color: #F8F5B3;
    padding-bottom: 100px;

`

export const FooterCopyright = styled.p`
    max-width: 440px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    
`


export const Column1 = styled.div`
    margin-top: 40px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    text-align: left;
`

export const Column2 = styled.div`
    margin-top: 100px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const Column3 = styled.div`
    grid-area: col3;
    border-radius: 10px;
    max-width: 40px;
    margin-left: 100px;
    

`

export const Column4 = styled.div`
    grid-area: col4;
    border-radius: 10px;
    max-width: 40px;
    
    
    
`

export const LogoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 200px);
    justify-content: 15px space-around;
    align-items: center;
    grid-template-areas: 'col3 col4';
    margin-left: 50px;
`

export const ImgWrapper = styled.div`
      max-width: 400px;
      height: 50px;
      margin-bottom: 40px;
`

export const Img = styled.img`
      width: 60%;
      margin: 0 0 10px 0;
      padding-right: 0;
`