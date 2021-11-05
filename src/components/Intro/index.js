import {
   IntroContainer,
   IntroWrapper,
   IntroRow,
   Column1,
   Column2,
   TextWrapper,
   IntroH1,
   IntroP,
   ImgWrap,
   Img,
   DotContainer,
   IntroJap,
   IndiP,
   IndiDiv
} from './IntroElements'

import Genji from '../../assets/NFT/1.png'

import Dots from '../../assets/dots.png'
import Jap from '../../assets/japintro.png'


const Intro = () => {


   




    return ( 
        <IntroContainer>
            <DotContainer>
                    <img width="80%" src={Dots} />
            </DotContainer>
            <IntroJap>
                    <img width="60%" src={Jap} />
            </IntroJap>
            <IntroWrapper>
                <IntroRow>
                    <Column1>
                       <TextWrapper>
                           <IntroH1>
                           GENJI IS A HIGH RESOLUTION{"\n"}
                             3D COLLECTION OF 5555 NFTS
                           </IntroH1>
                           <IntroP>
                           The sheriff’s notice is in. 5,555 Edition 1 Genji figurines have{"\n"}
MYSTERIOUSLY VANISHED from the locked warehouses at the{"\n"}
headquarters of Genji Holdings Inc ®. 
                           </IntroP>
                           <IntroP>
                           Several eyewitnesses have reported sightings of “little toys{"\n"}
kicking doors open and breaking locks before running out to the{"\n"}
streets". CCTV footage has revealed an assemble of metallic{"\n"}
bobble-head figurines no more than 4 inches tall- making their{"\n"}
escape and causing a HUGE mess. Police on Wednesday{"\n"}
stepped up the hunt for the extremely valuable figurines and{"\n"}
roadblocks have also been set up at all roads and highways in{"\n"}
and out of Solana District to contain them. 
                           </IntroP>
                          
                       </TextWrapper>
                    </Column1>
                    <Column2>
                       <ImgWrap>

                           <Img src={Genji}  />
                       </ImgWrap>
                    </Column2>
                </IntroRow>
                <IndiDiv>
                <IndiP>
                           Genji Holdings has tasked YOU to do your civic duty to use non-lethal force to appropriate these
assets. Capture as many as you can and bring them back to us!
  
                </IndiP>
                </IndiDiv>
            </IntroWrapper>
        </IntroContainer>
     );
}
 
export default Intro;