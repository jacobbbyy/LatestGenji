
import {Button} from './Button'
import {
    DiscordContainer,
    DiscordBg,
    DiscordImg,
    DiscordContent,
    DiscordH1,
    DiscordP,
    DiscordBtnWrapper,
} from './DiscordElements'
import DiscordBanner from '../../assets/discordbanner.jpg'




const DiscordJoin = () => {
    return ( 
        <DiscordContainer>
            <DiscordBg>
                <DiscordImg src={DiscordBanner} />
            </DiscordBg>
            <DiscordContent>
                <DiscordH1>
                    Join the Club!
                </DiscordH1>
                <DiscordP>
                Genji Discord just started and you are VERY EARLY! Join us now and be enter the{"\n"}
                Genji OG's club for mint priorities and extra benefits. We will be releasing sneak peaks{"\n"}
                and will be having multiple giveaways to thank our early supporters. Join us NOW and{"\n"}
                wagmi.

                </DiscordP>
                <DiscordBtnWrapper>
                    <Button>
                        Join our Discord
                    </Button>
                </DiscordBtnWrapper>
            </DiscordContent>
        </DiscordContainer>
     );
}
 
export default DiscordJoin;