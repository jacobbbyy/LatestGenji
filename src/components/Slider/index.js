

import Item1 from '../../assets/NFT/1.png'
import Item2 from '../../assets/NFT/2.png'
import Item3 from '../../assets/NFT/3.png'
import Item4 from '../../assets/NFT/4.png'
import Item5 from '../../assets/NFT/5.png'
import Item6 from '../../assets/NFT/6.png'
import Item7 from '../../assets/NFT/7.png'
import Item8 from '../../assets/NFT/8.png'
import Item9 from '../../assets/NFT/9.png'
import Item10 from '../../assets/NFT/10.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderContainer, SliderWrapper, CloudStrikeImg, DotXImg, Img, ImgX} from './SliderElements'
import CloudStrike from '../../assets/cloudstrike.png'
import DotX from '../../assets/dotx.png'


const SliderSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        arrows: false,
    }

    return ( 
       <SliderContainer>
           <SliderWrapper>
               <CloudStrikeImg>
                   <Img src={CloudStrike} />
               </CloudStrikeImg>
               <Slider {...settings}>
                  <div>
                      <img width="90%" src={Item1} />
                  </div>
                  <div>
                      <img width="90%" src={Item2} />
                  </div>
                  <div>
                      <img width="90%" src={Item3} />
                  </div>
                  <div>
                      <img width="90%" src={Item4} />
                  </div>
                  <div>
                      <img width="90%" src={Item5} />
                  </div>
                  <div>
                      <img width="90%" src={Item6} />
                  </div>
                  <div>
                      <img width="90%" src={Item7} />
                  </div>
                  <div>
                      <img width="90%" src={Item8} />
                  </div>
                  <div>
                      <img width="90%" src={Item9} />
                  </div>
                  <div>
                      <img width="90%" src={Item10} />
                  </div>
               </Slider>
               <DotXImg>
                   <ImgX  src={DotX} />
               </DotXImg>
                
           </SliderWrapper>

       </SliderContainer>

     );
}
 
export default SliderSection;