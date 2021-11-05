

import {
    RoadmapContainer, 
    RoadmapWrapper,
    CharImg1,
    CharImg2,
    Content,
    ContentH1,
    ContentP,
    RoadmapBtnWrapper,
    ImgS,
    ImgD

} from './RoadmapElements.js'
import { Button } from './Button'
import Char1 from '../../assets/roadmapchar.png'
import Char2 from '../../assets/roadmapchar2.png'
import { animateScroll as scroll } from 'react-scroll'


const RoadMapJap = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return ( 
        <>
          <RoadmapContainer>
              <RoadmapWrapper>
                  <CharImg1>
                        <ImgS src={Char1} />
                  </CharImg1>
                  <Content>
                      <ContentH1>
                          ROADMAP:
                      </ContentH1>
                      <ContentP>
                      The journey here at Genji begins with a range of community events such as fan art contest, twitter{"\n"}
                      giveaways, Easter egg events and many more. Events will be continuously hosted up until mint day{"\n"}
                      where 20% of profits will be placed in a Genji community wallet. Priority after mint-day would be to{"\n"}
                      obtain secondary market listings to enable Genji to be traded. A 5% royalty fee will be imposed for{"\n"}
                      every transaction made on secondary market listings and collective funds would be stored inside a{"\n"}
                      community wallet. Devs will also work on setting up a DAO and enable holders of Genji to participate in{"\n"}
                      the future developments through voting in Genji DAO. Furthermore, holders will also enjoy a range of{"\n"}
                      Genji Token airdrops that will enable token collectors to spend it on our very own Genji Merch store,{"\n"}
                      Gachapon or use as a vote in community polls.
                      </ContentP>
                      <RoadmapBtnWrapper>
                         <Button onClick={toggleHome}>
                             Click for more info
                         </Button>
                      </RoadmapBtnWrapper>
                  </Content>
                  <CharImg2>
                        <ImgD src={Char2} />
                  </CharImg2>
              </RoadmapWrapper>
          </RoadmapContainer>
        </>
     );
}
 
export default RoadMapJap;