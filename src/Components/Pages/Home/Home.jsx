import AboutBody from "./AboutBody/AboutBody";
import Banner from "./Banner/Banner";
import BodyIndex from "./BodyIndex/BodyIndex";
import ExerciseDetails from "./ExerciseDetails/ExerciseDetails";
import GymServices from "./GymServices/GymServices";
import GymTime from "./GymTime/GymTime";
import MonthlyAnnual from "./MonthlyAnnual/MonthlyAnnual";
import Our_Classes from "./Our_Classes/Our_Classes";
import OurTeam from "./OurTeam/OurTeam";
import TestomonialCard from "./TestomonialCard/TestomonialCard";
import VideoClasses from "./VideoClasses/VideoClasses";


const Home = ()=>{

    return(
        <div>
            <Banner></Banner>
            <GymTime className=""></GymTime>
            <AboutBody></AboutBody>
            <ExerciseDetails></ExerciseDetails>
            <Our_Classes></Our_Classes>
            <VideoClasses></VideoClasses>
            <OurTeam></OurTeam>
            <MonthlyAnnual></MonthlyAnnual>
            <BodyIndex></BodyIndex>
            <GymServices></GymServices>
            <TestomonialCard></TestomonialCard>
        </div>
    )
}
export default Home;