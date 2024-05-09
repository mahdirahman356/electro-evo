import Header from "../Header/Header";

const Home = () => {
    console.log(import.meta.env.VITE_APIKEY)

    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default Home;