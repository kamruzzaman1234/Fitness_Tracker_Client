import AboutBody from "./AboutBody/AboutBody";
import Banner from "./Banner/Banner";
import GymTime from "./GymTime/GymTime";

const Home = ()=>{

    return(
        <div>
            <Banner></Banner>
            <GymTime className=""></GymTime>
            <AboutBody></AboutBody>
        </div>
    )
}
export default Home;