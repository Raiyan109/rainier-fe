import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="bg-gray-200 w-full  px-8 py-4">
            <Navbar />
            <Hero />
        </div>
    );
};

export default Home;