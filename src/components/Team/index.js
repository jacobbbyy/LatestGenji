import {
    TeamContainer,
    TeamWrapper,
    TeamRow,
    Column1,
    Column2,
    Column3,
    ImgWrap,
    Img,
    TextWrapper,
    TeamH1,
    TeamH2
} from './TeamElements'
import SixNine from '../../assets/Honorary/69.jpg'
import Adidas from '../../assets/Honorary/adidas.jpg'
import Green from '../../assets/Honorary/420.jpg'
import Purple from '../../assets/Honorary/purple.jpg'
import Devil from '../../assets/Honorary/devil.jpg'
import Samurai from '../../assets/Honorary/samurai.jpg'
import Dolphin from '../../assets/Honorary/dolphin.jpg'
import Jacobb from '../../assets/Honorary/jacobb.jpg'
import Catty from '../../assets/Honorary/cat.jpg'




const Team = () => {
    return ( 
        <TeamContainer>
            <TeamWrapper>
                <TextWrapper>
                    <TeamH1>Team:</TeamH1>
                </TextWrapper>
                <TeamRow>
                    <Column1>
                       <ImgWrap>
                          <Img src={SixNine} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>NotDarren</TeamH2>
                       </ImgWrap>
                    </Column1>
                    <Column2>
                       <ImgWrap>
                          <Img src={Adidas} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>GGCOm</TeamH2>
                       </ImgWrap>
                    </Column2>
                    <Column3>
                       <ImgWrap>
                          <Img src={Green} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>Justin</TeamH2>
                       </ImgWrap>
                    </Column3>
                </TeamRow>
                <TeamRow>
                    <Column1>
                       <ImgWrap>
                          <Img src={Purple} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>NotDarren</TeamH2>
                       </ImgWrap>
                    </Column1>
                    <Column2>
                       <ImgWrap>
                          <Img src={Devil} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>GGCOm</TeamH2>
                       </ImgWrap>
                    </Column2>
                    <Column3>
                       <ImgWrap>
                          <Img src={Samurai} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>Justin</TeamH2>
                       </ImgWrap>
                    </Column3>
                </TeamRow>
                <TeamRow>
                    <Column1>
                       <ImgWrap>
                          <Img src={Dolphin} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>NotDarren</TeamH2>
                       </ImgWrap>
                    </Column1>
                    <Column2>
                       <ImgWrap>
                          <Img src={Jacobb} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>GGCOm</TeamH2>
                       </ImgWrap>
                    </Column2>
                    <Column3>
                       <ImgWrap>
                          <Img src={Catty} />
                          <TeamH1>ROLE</TeamH1>
                          <TeamH2>Justin</TeamH2>
                       </ImgWrap>
                    </Column3>
                </TeamRow>
            </TeamWrapper>
        </TeamContainer>
     );
}
 
export default Team;