import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ImageSection from "../ImageSection/ImageSection";
import Slider from "../Slider/Slider";
import RecentQueries from "./RecentQueries";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Header></Header>
            <RecentQueries></RecentQueries>
            <Banner></Banner>
            <ImageSection></ImageSection>
        </div>
    );
};

export default Home;