import AboutBody from "./AboutBody/AboutBody";
import Banner from "./Banner/Banner";
import ExerciseDetails from "./ExerciseDetails/ExerciseDetails";
import GymTime from "./GymTime/GymTime";
import Our_Classes from "./Our_Classes/Our_Classes";

const Home = ()=>{

    return(
        <div>
            <Banner></Banner>
            <GymTime className=""></GymTime>
            <AboutBody></AboutBody>
            <ExerciseDetails></ExerciseDetails>
            <Our_Classes></Our_Classes>
        </div>
    )
}
export default Home;