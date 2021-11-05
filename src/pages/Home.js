
import CollectionInfo from "../components/CollectionInfo";
import DiscordJoin from "../components/DiscordJoin";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Intro from "../components/Intro";
import RoadMapJap from "../components/RoadMapJap";
import SliderSection from "../components/Slider";
import Team from "../components/Team";




const Home = () => {
    return ( 
        <div className="home">
          <HeroSection />
          <Intro />
          <SliderSection />
          <CollectionInfo />
           <RoadMapJap />
          <Team />
          <DiscordJoin />
          <Footer />
          
          
         
          
        </div>
     );
}
 
export default Home;