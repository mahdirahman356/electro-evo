import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import RecentQueries from "./RecentQueries";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Header></Header>
            <RecentQueries></RecentQueries>
        </div>
    );
};

export default Home;