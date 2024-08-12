import Navbar from "../Components/Navbar.jsx";

function Home() {
    return (
        <div className="bg-orange-100 h-[50em]">
            <Navbar/>
            <div className="flex justify-center">
                <h1 className="relative top-4 bg-white leading-10 text-6xl font-bold font-Racing_Sans">Harley Davidson</h1>
            </div>
            <div className="flex justify-center">
                <img className="relative mt-16 h-[30em] " src={"home.png"} alt={"harley-bike"}/>
            </div>
        </div>
    );
}

export default Home;