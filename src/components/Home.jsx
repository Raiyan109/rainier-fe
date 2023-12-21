import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="bg-[#E0E0E0] w-full px-8 py-4 z-0">
            <Navbar />
            <Hero />
        </div>
    );
};

export default Home;